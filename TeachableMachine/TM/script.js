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
const DATA_PREVIEW_CONTAINER = document.createElement('div'); // 데이터를 표시할 컨테이너

DATA_PREVIEW_CONTAINER.id = 'dataPreview';
DATA_PREVIEW_CONTAINER.className = 'mt-4 d-flex flex-wrap gap-2 justify-content-center';
document.body.appendChild(DATA_PREVIEW_CONTAINER);

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

// 클래스 버튼 업데이트
function updateClassButtons() {
	DATA_BUTTONS_CONTAINER.innerHTML = '';
    CLASS_NAMES.forEach((className, index) => {
        const button = document.createElement('button');
        button.className = 'dataCollector btn btn-primary me-2';
        button.textContent = `${className} 데이터 수집`;
        button.setAttribute('data-1hot', index);

        // 시작과 중지를 분리하여 이벤트 처리
        button.addEventListener('mousedown', startDataGathering);
        button.addEventListener('mouseup', stopDataGathering);
        button.addEventListener('mouseleave', stopDataGathering); // 버튼에서 벗어날 경우 중지
        button.addEventListener('touchstart', startDataGathering, { passive: true });
        button.addEventListener('touchend', stopDataGathering);

        DATA_BUTTONS_CONTAINER.appendChild(button);
    });
}

// 데이터 수집 시작
function startDataGathering(event) {
    if (!videoPlaying) {
        // 웹캠이 활성화되지 않았을 경우 경고창 표시
        alert('웹캠이 활성화되지 않았습니다. 먼저 "웹캠 활성화" 버튼을 클릭하세요.');
        return;
    }
    const classNumber = parseInt(event.target.getAttribute('data-1hot'));
    gatherDataState = classNumber; // 수집 상태를 해당 클래스 번호로 설정
    dataGatherLoop();
}

// 데이터 수집 중지
function stopDataGathering() {
    gatherDataState = STOP_DATA_GATHER; // 수집 상태를 중지로 변경
}

// 데이터 수집 루프
function dataGatherLoop() {
    if (videoPlaying && gatherDataState !== STOP_DATA_GATHER) {
        const imageFeatures = calculateFeaturesOnCurrentFrame();
        trainingDataInputs.push(imageFeatures);
        trainingDataOutputs.push(gatherDataState);

        // 클래스별 이미지 미리보기 추가
        displayCollectedDataPreview(gatherDataState);

        if (examplesCount[gatherDataState] === undefined) {
            examplesCount[gatherDataState] = 0;
        }
        examplesCount[gatherDataState]++;
        STATUS.innerText = CLASS_NAMES.map(
            (name, i) => `${name} 데이터 수: ${examplesCount[i] || 0}`
        ).join(' | ');

        // 다음 프레임에 대해 루프 호출
        window.requestAnimationFrame(dataGatherLoop);
    }
}

// 데이터 미리보기 표시
function displayCollectedDataPreview(classNumber) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(VIDEO, 0, 0, canvas.width, canvas.height);

    let classPreviewContainer = document.querySelector(`#class-${classNumber}`);
    if (!classPreviewContainer) {
        // 클래스별 컨테이너 생성
        classPreviewContainer = document.createElement('div');
        classPreviewContainer.id = `class-${classNumber}`;
        classPreviewContainer.className = 'border p-2 bg-light rounded mb-3';
        classPreviewContainer.style.overflowY = 'auto';
        classPreviewContainer.style.maxHeight = '200px'; // 최대 높이 설정

        // 클래스 이름과 데이터 수 표시
        const classTitle = document.createElement('h5');
        classTitle.className = 'text-primary d-flex justify-content-between align-items-center';
        classTitle.innerHTML = `
            <span>${CLASS_NAMES[classNumber]}</span>
            <span id="class-count-${classNumber}" class="badge bg-secondary">0</span>
        `;

        classPreviewContainer.appendChild(classTitle);
        DATA_PREVIEW_CONTAINER.appendChild(classPreviewContainer);
    }
    // 클래스별 데이터 수 업데이트
    const countBadge = document.querySelector(`#class-count-${classNumber}`);
    const currentCount = parseInt(countBadge.textContent, 10) || 0;
    countBadge.textContent = currentCount + 1;

    // 캔버스를 클래스 컨테이너에 추가
    classPreviewContainer.appendChild(canvas);
}

// 데이터 미리보기 컨테이너 스타일 수정
DATA_PREVIEW_CONTAINER.style.display = 'flex';
DATA_PREVIEW_CONTAINER.style.flexWrap = 'wrap';
DATA_PREVIEW_CONTAINER.style.gap = '20px';
DATA_PREVIEW_CONTAINER.style.justifyContent = 'center';
DATA_PREVIEW_CONTAINER.style.padding = '20px';
DATA_PREVIEW_CONTAINER.style.width = '100%';
DATA_PREVIEW_CONTAINER.style.borderTop = '1px solid #ccc';
DATA_PREVIEW_CONTAINER.style.marginTop = '20px';

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

// 모델 초기화
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

            // 비디오 크기 설정 (웹캠 활성화 후)
            VIDEO.style.width = "30%";
            VIDEO.style.height = "auto";

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
            onEpochBegin: (epoch) => {
                STATUS.innerText = `에포크 ${epoch + 1}/10 시작 중...`;
            },
            onBatchEnd: (batch, logs) => {
                STATUS.innerText = `에포크 진행 중... 배치: ${batch + 1}, 손실값: ${logs.loss.toFixed(4)}`;
            },
            onEpochEnd: (epoch, logs) => {
                STATUS.innerText = `에포크 ${epoch + 1}/10 완료 - 손실값: ${logs.loss.toFixed(4)}, 정확도: ${(logs.acc * 100).toFixed(2)}%`;
            },
        },
	});

	// 메모리 해제
	outputsAsTensor.dispose();
	oneHotOutputs.dispose();
	inputsAsTensor.dispose();

    // 학습 완료 메시지
    STATUS.innerText = '모델 학습이 완료되었습니다! 예측을 시작합니다...';

	predict = true;
	predictLoop();
}

// 예측 결과를 표시할 컨테이너를 비디오 태그 아래에 추가
const PREDICTION_CONTAINER = document.createElement('div');
PREDICTION_CONTAINER.id = 'predictionContainer';
PREDICTION_CONTAINER.className = 'd-flex flex-column align-items-center mt-3';
PREDICTION_CONTAINER.style.width = '100%';
PREDICTION_CONTAINER.style.gap = '10px';
const videoParent = VIDEO.parentNode;
videoParent.appendChild(PREDICTION_CONTAINER); // 비디오 태그 바로 아래에 추가

// 클래스별 실시간 예측 결과 표시
function updatePredictionGraph(predictionArray) {
    PREDICTION_CONTAINER.innerHTML = ''; // 기존 그래프 초기화

    CLASS_NAMES.forEach((className, index) => {
        const row = document.createElement('div');
        row.className = 'd-flex align-items-center mb-2';
        row.style.width = '100%';

        const label = document.createElement('span');
        label.className = 'me-2';
        label.style.width = '80px';
        label.style.textAlign = 'right';
        label.textContent = className;

        const progressBarContainer = document.createElement('div');
        progressBarContainer.style.flexGrow = '1';
        progressBarContainer.style.height = '24px';
        progressBarContainer.style.backgroundColor = '#f0f0f0';
        progressBarContainer.style.borderRadius = '12px';
        progressBarContainer.style.overflow = 'hidden';

        const progressBar = document.createElement('div');
        progressBar.style.height = '100%';
        progressBar.style.width = `${Math.round(predictionArray[index] * 100)}%`;
        progressBar.style.backgroundColor = getClassColor(index);
        progressBar.style.borderRadius = '12px';

        const percentage = document.createElement('span');
        percentage.className = 'ms-2';
        percentage.style.width = '50px';
        percentage.textContent = `${Math.round(predictionArray[index] * 100)}%`;

        progressBarContainer.appendChild(progressBar);
        row.appendChild(label);
        row.appendChild(progressBarContainer);
        row.appendChild(percentage);

        PREDICTION_CONTAINER.appendChild(row);
    });
}

// 예측 루프
function predictLoop() {
	if (predict) {
        tf.tidy(() => {
            const imageFeatures = calculateFeaturesOnCurrentFrame();
            const prediction = model.predict(imageFeatures.expandDims()).squeeze();
            const predictionArray = prediction.arraySync();

            updatePredictionGraph(predictionArray); // 그래프 업데이트
        });
        window.requestAnimationFrame(predictLoop);
    }
}

// 클래스 색상 선택 함수
function getClassColor(index) {
    const colors = ['#FF6F61', '#6B8E23', '#4682B4', '#DAA520', '#8A2BE2'];
    return colors[index % colors.length]; // 색상이 부족하면 반복 사용
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
