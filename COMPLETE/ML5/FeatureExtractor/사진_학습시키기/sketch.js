let featureExtractor;
let classifier;
let video;
let loss;
let dogImages = 0;
let catImages = 0;
let badgerImages = 0;

function setup() {
  noCanvas();
  // 비디오 요소 생성
  video = createCapture(VIDEO);
  video.parent('videoContainer');
  video.size(320, 240);

  // MobileNet에서 이미 학습된 특징 추출
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);

  // 추출된 특징을 사용하여 새 분류기 생성, 사용할 비디오 제공
  const options = { numLabels: 3 };
  classifier = featureExtractor.classification(video, options);
  // UI 버튼 설정
  setupButtons();
}

// 모델이 로드되었을 때 호출되는 함수
function modelReady() {
  select('#modelStatus').html('MobileNet이 로드되었습니다!');
  // 시작 시 미리 학습된 모델을 로드하려면 아래 코드를 사용
  // classifier.load('./model/model.json', function() {
  //   select('#modelStatus').html('사용자 정의 모델이 로드되었습니다!');
  // });
}

// 현재 프레임을 분류
function classify() {
  classifier.classify(gotResults);
}

// UI 버튼을 생성하는 유틸리티 함수
function setupButtons() {
  // "고양이" 버튼이 눌렸을 때 현재 프레임을 "cat" 레이블로 분류기에 추가
  buttonA = select('#catButton');
  buttonA.mousePressed(function() {
    classifier.addImage('cat');
    select('#amountOfCatImages').html(catImages++);
  });

  // "개" 버튼이 눌렸을 때 현재 프레임을 "dog" 레이블로 분류기에 추가
  buttonB = select('#dogButton');
  buttonB.mousePressed(function() {
    classifier.addImage('dog');
    select('#amountOfDogImages').html(dogImages++);
  });

  // "오소리" 버튼이 눌렸을 때 현재 프레임을 "badger" 레이블로 분류기에 추가
  buttonC = select('#badgerButton');
  buttonC.mousePressed(function() {
    classifier.addImage('badger');
    select('#amountOfBadgerImages').html(badgerImages++);
  });

  // 학습 버튼
  train = select('#train');
  train.mousePressed(function() {
    classifier.train(function(lossValue) {
      if (lossValue) {
        loss = lossValue;
        select('#loss').html('손실: ' + loss);
      } else {
        select('#loss').html('학습 완료! 최종 손실: ' + loss);
      }
    });
  });

  // 예측 버튼
  buttonPredict = select('#buttonPredict');
  buttonPredict.mousePressed(classify);

  // 모델 저장 버튼
  saveBtn = select('#save');
  saveBtn.mousePressed(function() {
    classifier.save();
  });

  // 모델 로드 버튼
  loadBtn = select('#load');
  loadBtn.changed(function() {
    classifier.load(loadBtn.elt.files, function() {
      select('#modelStatus').html('사용자 정의 모델이 로드되었습니다!');
    });
  });
}

// 결과를 표시
function gotResults(err, results) {
  // 오류가 있으면 표시
  if (err) {
    console.error(err);
  }
  if (results && results[0]) {
    select('#result').html(results[0].label); // 예측된 레이블 표시
    select('#confidence').html(results[0].confidence.toFixed(2) * 100 + '%'); // 신뢰도 표시
    classify(); // 다음 예측 수행
  }
}
