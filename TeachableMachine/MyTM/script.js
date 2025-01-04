// DOM 요소를 가져옴
const STATUS = document.getElementById('status');
const VIDEO = document.getElementById('webcam');
const ENABLE_CAM_BUTTON = document.getElementById('enableCam');
const RESET_BUTTON = document.getElementById('reset');
const TRAIN_BUTTON = document.getElementById('train');
const DOWNLOAD_MODEL_BUTTON = document.getElementById('downloadModel');
const LOAD_MODEL_BUTTON = document.getElementById('loadModel');
const ADD_CLASS_BUTTON = document.getElementById('addClass');
const NEW_CLASS_NAME_INPUT = document.getElementById('newClassName');
const DATA_BUTTONS_CONTAINER = document.getElementById('dataButtons');
const PREDICTION_RESULT = document.getElementById('predictionResult');

const MOBILE_NET_INPUT_WIDTH = 224;
const MOBILE_NET_INPUT_HEIGHT = 224;
const STOP_DATA_GATHER = -1;
let CLASS_NAMES = []; // 클래스 이름 배열 (사용자가 정의 가능)

ENABLE_CAM_BUTTON.addEventListener('click', enableCam);
TRAIN_BUTTON.addEventListener('click', trainAndPredict);
RESET_BUTTON.addEventListener('click', reset);
DOWNLOAD_MODEL_BUTTON.addEventListener('click', downloadModel);
LOAD_MODEL_BUTTON.addEventListener('click', loadModel);
ADD_CLASS_BUTTON.addEventListener('click', addClass);

// 상태 변수 초기화
let mobilenet = undefined;
let gatherDataState = STOP_DATA_GATHER;
let videoPlaying = false;
let trainingDataInputs = [];
let trainingDataOutputs = [];
let examplesCount = [];
let predict = false;

// MobileNet 모델을 로드하고 준비 상태로 만듦
async function loadMobileNetFeatureModel() {
	const URL =
		'https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v3_small_100_224/feature_vector/5/default/1';
	mobilenet = await tf.loadGraphModel(URL, { fromTFHub: true });
	STATUS.innerText = 'MobileNet v3가 성공적으로 로드되었습니다!';
	tf.tidy(() =>
		mobilenet.predict(
			tf.zeros([1, MOBILE_NET_INPUT_HEIGHT, MOBILE_NET_INPUT_WIDTH, 3])
		)
	);
}

loadMobileNetFeatureModel();

// 모델 생성 함수 정의
let model = tf.sequential();
function createModel() {
	model = tf.sequential();
	model.add(
		tf.layers.dense({ inputShape: [1024], units: 128, activation: 'relu' })
	);
	model.add(
		tf.layers.dense({ units: CLASS_NAMES.length, activation: 'softmax' })
	);
	model.compile({
		optimizer: 'adam',
		loss:
			CLASS_NAMES.length === 2
				? 'binaryCrossentropy'
				: 'categoricalCrossentropy',
		metrics: ['accuracy'],
	});
}

// 웹캠 사용 가능 여부 확인
function hasGetUserMedia() {
	return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

// 웹캠 활성화
function enableCam() {
	if (hasGetUserMedia()) {
		navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
			VIDEO.srcObject = stream;
			VIDEO.addEventListener('loadeddata', () => {
				videoPlaying = true;
				ENABLE_CAM_BUTTON.classList.add('removed');
			});
		});
	} else {
		console.warn('getUserMedia() is not supported by your browser');
	}
}

// 학습 및 예측 시작
async function trainAndPredict() {
	predict = false;

	// 데이터를 셔플하여 학습 준비
	tf.util.shuffleCombo(trainingDataInputs, trainingDataOutputs);

	// 텐서로 변환
	const outputsAsTensor = tf.tensor1d(trainingDataOutputs, 'int32');
	const oneHotOutputs = tf.oneHot(outputsAsTensor, CLASS_NAMES.length);
	const inputsAsTensor = tf.stack(trainingDataInputs);

	// 모델 학습
	await model.fit(inputsAsTensor, oneHotOutputs, {
		shuffle: true,
		batchSize: 5,
		epochs: 10,
		callbacks: {
			onEpochEnd: (epoch, logs) => console.log(`에포크 ${epoch}:`, logs),
		},
	});

	// 메모리 해제
	outputsAsTensor.dispose();
	oneHotOutputs.dispose();
	inputsAsTensor.dispose();

	predict = true;
	predictLoop();
}

// 예측 루프
function predictLoop() {
	if (predict) {
		tf.tidy(() => {
			const imageFeatures = calculateFeaturesOnCurrentFrame();
			const prediction = model
				.predict(imageFeatures.expandDims())
				.squeeze();
			const highestIndex = prediction.argMax().arraySync();
			const predictionArray = prediction.arraySync();

			PREDICTION_RESULT.innerText = `예측: ${
				CLASS_NAMES[highestIndex]
			} (확률: ${Math.floor(predictionArray[highestIndex] * 100)}%)`;
		});
		window.requestAnimationFrame(predictLoop);
	}
}

// 현재 프레임의 특징 추출
function calculateFeaturesOnCurrentFrame() {
	return tf.tidy(() => {
		const videoFrameAsTensor = tf.browser.fromPixels(VIDEO);
		const resizedTensorFrame = tf.image.resizeBilinear(
			videoFrameAsTensor,
			[MOBILE_NET_INPUT_HEIGHT, MOBILE_NET_INPUT_WIDTH],
			true
		);
		const normalizedTensorFrame = resizedTensorFrame.div(255);
		return mobilenet.predict(normalizedTensorFrame.expandDims()).squeeze();
	});
}

// 특정 클래스에 데이터 수집
function gatherDataForClass() {
	const classNumber = parseInt(this.getAttribute('data-1hot'));
	gatherDataState =
		gatherDataState === STOP_DATA_GATHER ? classNumber : STOP_DATA_GATHER;
	dataGatherLoop();
}

// 데이터 수집 루프
function dataGatherLoop() {
	if (videoPlaying && gatherDataState !== STOP_DATA_GATHER) {
		const imageFeatures = calculateFeaturesOnCurrentFrame();
		trainingDataInputs.push(imageFeatures);
		trainingDataOutputs.push(gatherDataState);

		if (examplesCount[gatherDataState] === undefined) {
			examplesCount[gatherDataState] = 0;
		}
		examplesCount[gatherDataState]++;
		STATUS.innerText = CLASS_NAMES.map(
			(name, i) => `${name} 데이터 수: ${examplesCount[i] || 0}`
		).join(' | ');

		window.requestAnimationFrame(dataGatherLoop);
	}
}

// UI 버튼 업데이트
function updateClassButtons() {
	DATA_BUTTONS_CONTAINER.innerHTML = '';
	CLASS_NAMES.forEach((className, index) => {
		const button = document.createElement('button');
		button.className = 'dataCollector btn btn-primary me-2';
		button.textContent = `${className} 데이터 수집`;
		button.setAttribute('data-1hot', index);
		button.addEventListener('mousedown', gatherDataForClass);
		button.addEventListener('mouseup', gatherDataForClass);
		button.addEventListener('touchend', gatherDataForClass);
		DATA_BUTTONS_CONTAINER.appendChild(button);
	});
}

// 새로운 클래스 추가
function addClass() {
	const newClassName = NEW_CLASS_NAME_INPUT.value.trim();
	if (newClassName && !CLASS_NAMES.includes(newClassName)) {
		CLASS_NAMES.push(newClassName);
		updateClassButtons();
		createModel();
		STATUS.innerText = `클래스 "${newClassName}"가 성공적으로 추가되었습니다!`;
		NEW_CLASS_NAME_INPUT.value = '';
	} else {
		STATUS.innerText = '클래스 이름이 중복되었거나 유효하지 않습니다.';
	}
}

// 데이터 초기화
function reset() {
	predict = false;
	examplesCount.splice(0);
	trainingDataInputs.forEach((tensor) => tensor.dispose());
	trainingDataInputs = [];
	trainingDataOutputs = [];
	STATUS.innerText = '수집된 데이터가 없습니다.';
}

// 모델 및 메타데이터 다운로드
async function downloadModel() {
	try {
		// 메타데이터 생성
		const metadata = { classNames: CLASS_NAMES };
		const metadataBlob = new Blob([JSON.stringify(metadata)], {
			type: 'application/json',
		});
		const metadataURL = URL.createObjectURL(metadataBlob);

		// 메타데이터 다운로드
		const metadataLink = document.createElement('a');
		metadataLink.href = metadataURL;
		metadataLink.download = 'model-metadata.json';
		metadataLink.click();

		// 모델 다운로드
		await model.save('downloads://my-model');
		STATUS.innerText = '모델과 메타데이터가 성공적으로 다운로드되었습니다!';
	} catch (error) {
		console.error('모델 다운로드 중 오류:', error.message);
		STATUS.innerText = '모델 다운로드 중 오류가 발생했습니다.';
	}
}

// 모델 및 메타데이터 로드
async function loadModel() {
	const modelUploadInput = document.createElement('input');
	modelUploadInput.type = 'file';
	modelUploadInput.accept = '.json,.bin';
	modelUploadInput.multiple = true;

	modelUploadInput.onchange = async (e) => {
		try {
			const files = e.target.files;
			let modelFile = null;
			let metadataFile = null;

			Array.from(files).forEach((file) => {
				if (
					file.name.endsWith('.json') &&
					!file.name.includes('metadata')
				) {
					modelFile = file;
				} else if (
					file.name.includes('metadata') &&
					file.name.endsWith('.json')
				) {
					metadataFile = file;
				}
			});

			if (!modelFile || !metadataFile) {
				throw new Error(
					'모델 파일과 메타데이터 파일을 모두 선택해야 합니다.'
				);
			}

			model = await tf.loadLayersModel(tf.io.browserFiles([modelFile]));

			const metadataText = await metadataFile.text();
			const metadata = JSON.parse(metadataText);
			CLASS_NAMES = metadata.classNames || [];

			if (CLASS_NAMES.length === 0) {
				throw new Error(
					'메타데이터에서 클래스 이름을 찾을 수 없습니다.'
				);
			}

			updateClassButtons();
			STATUS.innerText = '모델과 메타데이터가 성공적으로 로드되었습니다!';
			predict = true;
			predictLoop();
		} catch (error) {
			console.error('모델 로드 중 오류:', error.message);
			STATUS.innerText =
				'모델 또는 메타데이터 로드 중 오류가 발생했습니다.';
		}
	};
	modelUploadInput.click();
}
