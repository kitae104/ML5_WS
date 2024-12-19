let cave;
let button;
let dropdown;

// function preload() {
//   cvae = ml5.CVAE('model/quick_draw/manifest.json');
// }

function setup() {
  createCanvas(200, 200);
  // 미리 학습된 모델을 사용하여 새 인스턴스를 생성
  cave = ml5.CVAE('model/quick_draw/manifest.json', modelReady);

  // 이미지를 생성할 버튼 생성
  button = createButton('generate');
  button.mousePressed(generateImage);
  background(0);
}

function gotImage(error, result) {
  // 결과 이미지를 캔버스에 표시
  image(result.image, 0, 0, width, height);
}

function modelReady() {
  // 가능한 모든 레이블로 드롭다운 생성
  dropdown = createSelect();
  for (let label of cave.labels) {
    dropdown.option(label);
  }
}

function generateImage() {
  // 선택한 레이블을 기반으로 이미지 생성
  let label = dropdown.value();
  cave.generate(label, gotImage);
}
