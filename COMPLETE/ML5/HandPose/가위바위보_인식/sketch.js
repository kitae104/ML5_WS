// 비디오 캡처 객체 및 예측값 배열 초기화
let video;
let predictions = [];
let examplesAdded = false; // 예제가 추가되었는지 여부
let outputLabel = ""; // 출력 라벨
let label;
let countRock = 0; // 가위바위보에서 '바위' 예제 개수
let countPaper = 0; // '보' 예제 개수
let countScissors = 0; // '가위' 예제 개수
let warning = ""; // 사용자 경고 메시지

// KNN 분류기 초기화 (ml5.js 사용)
const knnClassifier = ml5.KNNClassifier();

// 캔버스를 설정하고 웹캠을 시작한 후 Handpose 모델 초기화 및 UI 버튼 생성
function setup() {
  createCanvas(640, 480); // 캔버스 크기 설정
  video = createCapture(VIDEO); // 웹캠 비디오 캡처 시작

  const handpose = ml5.handpose(video, modelReady); // Handpose 모델 초기화
  handpose.on('predict', gotResults); // 예측 결과를 처리하는 콜백 함수 설정
  video.hide(); // 비디오 숨기기

  // UI 버튼 생성 및 클릭 이벤트 설정
  let rockButton = createButton("👊", 'rock');
  let paperButton = createButton("🖐", 'paper');
  let scissorsButton = createButton("✌️", 'scissors');
  rockButton.mousePressed(rockPressed);
  paperButton.mousePressed(paperPressed);
  scissorsButton.mousePressed(scissorsPressed);

  textAlign(CENTER); // 텍스트 정렬 설정
  noStroke(); // 외곽선 제거
  fill(0, 255, 0); // 텍스트 색상 설정
}

// 캔버스에 그리기 함수
function draw() {
  background(255); // 배경 흰색으로 설정
  image(video, 0, 0, width, height); // 웹캠 이미지를 캔버스에 표시
  drawKeypoints(); // Handpose 모델의 키포인트 그리기

  // 각 클래스의 샘플 개수 표시
  textSize(18);
  text('👊 : ' + countRock, 60, height - 10);
  text('🖐 : ' + countPaper, 170, height - 10);
  text('✌️ : ' + countScissors, 290, height - 10);

  // 출력 라벨 표시
  textSize(120);
  text(outputLabel, width / 6, height / 2);

  if (examplesAdded) {
    classify(); // 예제가 추가되었으면 분류 수행
  }

  // 경고 메시지 표시
  textSize(32);
  text(warning, width / 2, height / 2);
}

// Handpose 모델이 준비되었을 때 호출되는 함수
function modelReady() {
  console.log("Model ready!");
}

// Handpose 결과를 처리하는 함수
function gotResults(results) {
  predictions = results; // 예측값 저장
}

// '바위' 버튼을 클릭했을 때 호출되는 함수
function rockPressed() {
  addExample('rock');
  countRock = knnClassifier.getCountByLabel().rock; // 바위 예제 개수 업데이트
}

// '보' 버튼을 클릭했을 때 호출되는 함수
function paperPressed() {
  addExample('paper');
  countPaper = knnClassifier.getCountByLabel().paper; // 보 예제 개수 업데이트
}

// '가위' 버튼을 클릭했을 때 호출되는 함수
function scissorsPressed() {
  addExample('scissors');
  countScissors = knnClassifier.getCountByLabel().scissors; // 가위 예제 개수 업데이트
}

// 예제를 추가하는 함수
function addExample(label) {
  // 손이 화면에 감지되었는지 확인
  if (predictions.length > 0) {
    warning = "";
    for (let i = 0; i < predictions.length; i += 1) {
      const landmarks = predictions[0].landmarks;

      // 손의 키포인트 데이터를 배열로 변환
      const predictionArray = landmarks.map(p => [p[0], p[1]]);

      // KNN 분류기에 예제 추가
      knnClassifier.addExample(predictionArray, label);
    }
    examplesAdded = true; // 예제가 추가되었음을 표시
  } else {
    // 손이 감지되지 않았을 경우 경고 메시지 표시
    warning = "손을 화면 안에 위치시키고 포즈를 취하세요.";
  }
}

// 예제를 분류하는 함수
function classify() {
  if (predictions.length > 0) {
    for (let i = 0; i < predictions.length; i += 1) {
      const landmarks = predictions[0].landmarks;

      // 키포인트 데이터를 배열로 변환
      const predictionArray = landmarks.map(p => [p[0], p[1]]);

      // 분류 수행 및 결과 처리
      knnClassifier.classify(predictionArray, (err, result) => {
        label = result.label;
      });

      // 분류 결과에 따라 출력 라벨 설정
      if (label == "rock") {
        outputLabel = '👊';
      } else if (label == "scissors") {
        outputLabel = '✌️';
      } else if (label == "paper") {
        outputLabel = '🖐';
      }
    }
  } else {
    outputLabel = ""; // 손이 감지되지 않았을 경우 출력 라벨 초기화
  }
}

// Handpose 키포인트를 그리는 함수
function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      ellipse(keypoint[0], keypoint[1], 10, 10); // 키포인트를 원으로 표시
    }
  }
}
