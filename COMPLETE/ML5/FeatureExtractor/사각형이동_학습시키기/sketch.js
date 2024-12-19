let featureExtractor;
let regressor;
let video;
let loss;
let slider;
let samples = 0;
let positionX = 140;

function setup() {
  createCanvas(340, 280);
  // 비디오 요소 생성
  video = createCapture(VIDEO);
  // 비디오를 숨기고 캔버스에만 표시
  video.hide();
  // MobileNet에서 특징 추출
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);
  // 추출된 특징을 사용하여 새로운 회귀 모델 생성, 비디오 제공
  regressor = featureExtractor.regression(video, videoReady);
  // UI 버튼 생성
  setupButtons();
}

function draw() {
  image(video, 0, 0, 340, 280);
  noStroke();
  fill(255, 0, 0);
  rect(positionX, 120, 50, 50); // 빨간색 사각형 그리기
}

// 모델이 로드되었을 때 호출되는 함수
function modelReady() {
  select('#modelStatus').html('모델이 로드되었습니다!');
}

// 비디오가 로드되었을 때 호출되는 함수
function videoReady() {
  select('#videoStatus').html('비디오 준비 완료!');
}

// 현재 프레임을 분류
function predict() {
  regressor.predict(gotResults);
}

// UI 버튼을 생성하는 유틸리티 함수
function setupButtons() {
  slider = select('#slider');
  // 샘플 추가 버튼이 눌렸을 때 현재 프레임을 슬라이더 값으로 분류기에 추가
  select('#addSample').mousePressed(function() {
    regressor.addImage(slider.value());
    select('#amountOfSamples').html(samples++);
  });

  // 학습 버튼
  select('#train').mousePressed(function() {
    regressor.train(function(lossValue) {
      if (lossValue) {
        loss = lossValue;
        select('#loss').html('손실: ' + loss);
      } else {
        select('#loss').html('학습 완료! 최종 손실: ' + loss);
      }
    });
  });

  // 예측 버튼
  select('#buttonPredict').mousePressed(predict);
}

// 결과를 표시
function gotResults(err, result) {
  if (err) {
    console.error(err);
  }
  if (result && result.value) {
    positionX = map(result.value, 0, 1, 0, width); // 결과 값을 위치로 매핑
    slider.value(result.value); // 슬라이더 값 업데이트
    predict(); // 다음 예측 수행
  }
}
