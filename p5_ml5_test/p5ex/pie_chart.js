let angles = [30, 10, 45, 35, 60, 38, 75, 67];

function setup() {
  createCanvas(720, 400);
  noStroke();
  noLoop(); // 프로그램 시작시 한 번 실행 뒤 멈추기
}

function draw() {
  background(100);
  pieChart(300, angles);
}

function pieChart(diameter, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    // 값을 0~데이터 갯수의 값을 0~255 색상에 매핑하기 
    let gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(
      width / 2,
      height / 2,
      diameter,
      diameter,
      lastAngle,
      lastAngle + radians(angles[i])
    );
    lastAngle += radians(angles[i]);  // 마지막 각도 갱신
  }
}
