let featureExtractor;
let classifier;
let video;
let loss;
let labels = []; // 동적으로 추가된 라벨 저장

function setup() {
  noCanvas();
  // 비디오 요소 생성
  video = createCapture(VIDEO);
  video.parent('videoContainer');
  video.size(320, 240);

  // MobileNet에서 이미 학습된 특징 추출
  featureExtractor = ml5.featureExtractor('MobileNet', modelReady);

  // 분류기를 생성
  classifier = featureExtractor.classification(video);

  // UI 버튼 생성
  setupButtons();
}

// 모델이 로드되었을 때 호출
function modelReady() {
  select('#modelStatus').html('MobileNet이 로드되었습니다!');
}

// UI 버튼 생성
function setupButtons() {
  const addLabelButton = select('#addLabelButton');
  addLabelButton.mousePressed(() => {
    const newLabel = select('#newLabel').value().trim();
    if (newLabel && !labels.includes(newLabel)) {
      labels.push(newLabel);

      const customLabelsDiv = select('#customLabels');
      const labelSectionId = `labelSection-${newLabel}`;
      const labelCounterId = `amountOf${newLabel}Images`;

      // 라벨 섹션 생성
      customLabelsDiv.html(
        `<div id="${labelSectionId}" class="labelSection">
          <h3>${newLabel}</h3>
          <button id="addImage-${newLabel}">Add ${newLabel} Image</button>
          <span id="${labelCounterId}">0</span> ${newLabel} Images
          <div id="images-${newLabel}" class="labelImages"></div>
        </div>`,
        true
      );

      let labelCount = 0;
      const labelButton = select(`#addImage-${newLabel}`);
      labelButton.mousePressed(() => {
        classifier.addImage(newLabel); // 학습 데이터 추가
        labelCount++;
        select(`#${labelCounterId}`).html(labelCount); // 카운트 업데이트

        // 현재 프레임을 미리보기 영역에 추가
        captureImagePreview(newLabel);
      });

      select('#newLabel').value('');
    }
  });

  const trainButton = select('#train');
  trainButton.mousePressed(() => {
    classifier.train((lossValue) => {
      if (lossValue) {
        loss = lossValue;
        select('#loss').html(`손실: ${loss}`);
      } else {
        select('#loss').html('학습 완료!');
      }
    });
  });

  const predictButton = select('#buttonPredict');
  predictButton.mousePressed(() => {
    classify();
  });

  const saveButton = select('#save');
  saveButton.mousePressed(() => {
    classifier.save();
  });

  const loadButton = select('#load');
  loadButton.changed(() => {
    classifier.load(loadButton.elt.files, () => {
      select('#modelStatus').html('사용자 정의 모델이 로드되었습니다!');
    });
  });
}

// 결과 분류
function classify() {
  classifier.classify((err, results) => {
    if (err) {
      console.error(err);
      return;
    }

    if (results && results[0]) {
      select('#result').html(results[0].label);
      select('#confidence').html(`${(results[0].confidence * 100).toFixed(2)}%`);
      classify();
    }
  });
}

// 라벨별 이미지 미리보기 추가
function captureImagePreview(label) {
  // 버튼을 누르는 순간의 이미지 캡처
  const canvas = createCanvas(320, 240); // 비디오 크기와 동일한 캔버스 생성
  canvas.hide(); // 캔버스를 숨김 처리
  image(video, 0, 0, 320, 240); // 현재 비디오 프레임을 캡처
  const imageData = canvas.elt.toDataURL(); // 데이터 URL로 변환

  // 이미지 미리보기 추가
  const imgElement = createImg(imageData, `${label} Image`);
  imgElement.addClass('previewImage'); // CSS 클래스 추가
  imgElement.parent(`#images-${label}`); // 라벨별 이미지 섹션에 추가

  // 캔버스 제거
  canvas.remove();
}
