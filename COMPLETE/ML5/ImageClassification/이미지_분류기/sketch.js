let classifier;
let img;
let resultDiv;

function setup() {
  // MobileNet 모델 로드
  classifier = ml5.imageClassifier('MobileNet', modelReady);

  // 드롭 영역 참조
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");

  // 드래그 앤 드롭 이벤트 처리
  dropZone.addEventListener("dragover", (e) => e.preventDefault());
  dropZone.addEventListener("drop", handleDrop);

  // 드롭 영역 클릭으로 파일 업로드 트리거
  dropZone.addEventListener("click", () => fileInput.click());

  // 파일 선택 이벤트 처리
  fileInput.addEventListener("change", handleFileSelect);

  // 화면 크기 변경 시 드롭 영역과 이미지 크기 조정
  window.addEventListener("resize", handleResize);

  // 초기 캔버스 생성
  createOrResizeCanvas();
}

// MobileNet 모델 준비 완료
function modelReady() {
  console.log("모델이 준비되었습니다!");
}

// 파일 선택 처리
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    processImage(file);
  }
}

// 드래그 앤 드롭 처리
function handleDrop(event) {
  event.preventDefault();
  const file = event.dataTransfer.files[0];
  if (file) {
    processImage(file);
  }
}

// 이미지 처리
function processImage(file) {
  loadImage(URL.createObjectURL(file), (loadedImage) => {
    // 기존 이미지 제거
    img = null;
    clearCanvas();

    // 새 이미지 로드 및 표시
    img = loadedImage;
    displayImageToFit(img);
    classifyImage();
  });
}

// 캔버스 생성 또는 크기 조정
function createOrResizeCanvas() {
  const dropZone = document.getElementById("dropZone");
  const dropZoneWidth = dropZone.offsetWidth;
  const dropZoneHeight = dropZone.offsetHeight;

  if (!dropZone.querySelector("canvas")) {
    const canvasElement = createCanvas(dropZoneWidth, dropZoneHeight).canvas;
    canvasElement.style.position = "absolute";
    dropZone.appendChild(canvasElement);
  } else {
    resizeCanvas(dropZoneWidth, dropZoneHeight);
    clear(); // 캔버스 초기화
  }

  // 이미지가 이미 업로드되어 있으면 다시 렌더링
  if (img) {
    displayImageToFit(img);
  }
}

// 캔버스 초기화
function clearCanvas() {
  clear(); // 캔버스 클리어
  if (resultDiv) {
    resultDiv.textContent = ""; // 결과 텍스트 초기화
  }
}

// 이미지 비율 유지하며 드롭 영역에 맞게 크기 조정
function displayImageToFit(loadedImage) {
  const dropZone = document.getElementById("dropZone");
  const dropZoneWidth = dropZone.offsetWidth;
  const dropZoneHeight = dropZone.offsetHeight;

  const imgAspect = loadedImage.width / loadedImage.height; // 이미지 비율
  const zoneAspect = dropZoneWidth / dropZoneHeight; // 드롭 영역 비율

  let drawWidth, drawHeight;

  if (imgAspect > zoneAspect) {
    // 이미지가 더 넓은 경우: 너비를 드롭 영역에 맞추고 높이를 조정
    drawWidth = dropZoneWidth;
    drawHeight = dropZoneWidth / imgAspect;
  } else {
    // 이미지가 더 높은 경우: 높이를 드롭 영역에 맞추고 너비를 조정
    drawHeight = dropZoneHeight;
    drawWidth = dropZoneHeight * imgAspect;
  }

  // 드롭 영역 중앙에 이미지 배치
  const offsetX = (dropZoneWidth - drawWidth) / 2;
  const offsetY = (dropZoneHeight - drawHeight) / 2;

  image(loadedImage, offsetX, offsetY, drawWidth, drawHeight);
}

// 화면 크기 변경 이벤트 처리
function handleResize() {
  createOrResizeCanvas();
}

// 이미지 분류
function classifyImage() {
  if (img) {
    classifier.classify(img, gotResult);
  }
}

function extractKorean(text) {
  // 문자열이 아닌 경우 문자열로 변환
  if (typeof text !== "string") {
    text = String(text);
  }

  // 정규식으로 한글만 추출 (한글 단어 및 구 포함)
  const koreanMatches = text.match(/[가-힣\s]+/g);
  if (koreanMatches) {
    // 추출된 한글 부분을 배열로 반환하고, 중복 제거
    const uniqueKorean = [...new Set(koreanMatches.join(" ").split(/,\s*/))];
    return uniqueKorean.join(", ").trim(); // 쉼표와 공백으로 구분하여 반환
  }
  return "한글 없음"; // 한글이 없을 경우 기본값 반환
}

// 분류 결과 처리
async function gotResult(error, results) {
  if (error) {
    console.error(error);
    updateResult("오류가 발생했습니다.");
    return;
  }
  // 결과 가져오기
  const label = results[0].label; // 분류된 라벨
  const confidence = (results[0].confidence * 100).toFixed(2); // 신뢰도(%)

  try {
    // 번역된 결과 가져오기
    const translatedLabel = await translateToKorean(label); // 비동기 함수 호출
    const koreanOnly = extractKorean(translatedLabel); // 한글만 추출
    updateResult(`${koreanOnly} (${confidence}%)`);
  } catch (translationError) {
    console.error("번역 실패:", translationError);
    updateResult(`${label} (${confidence}%)`); // 번역 실패 시 원본 텍스트 사용
  }
}

// 결과 표시 업데이트
function updateResult(text) {
  const dropZone = document.getElementById("dropZone");
  if (!resultDiv) {
    resultDiv = document.createElement("div");
    resultDiv.id = "result";
    resultDiv.style.top = "50%";
    resultDiv.style.left = "50%";
    resultDiv.style.transform = "translate(-50%, -50%)";
    dropZone.appendChild(resultDiv);
  }
  resultDiv.textContent = text;

  // 스타일 적용
  resultDiv.style.fontSize = "30px"; // 폰트 크기 (픽셀)
  resultDiv.style.color = "#2307fc"; // 텍스트 색상 (16진수)
  resultDiv.style.fontWeight = "bold"; // 폰트 굵기
  resultDiv.style.textAlign = "center"; // 텍스트 정렬
}
// 결과 번역
async function translateToKorean(label) {
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ko&dt=t&q=${encodeURIComponent(label)}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    // 번역된 텍스트 반환
    return result;
  } catch (error) {
    console.error("번역 실패:", error);
    return label; // 번역 실패 시 원래 텍스트 반환
  }
}
