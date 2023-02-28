// handpose: 캔버스 상에서 엄지손가락의 좌우 위치에 따라 원의 색상 변경
// - 모델 로딩되기 전에 문자 사용 
let video;
let handpose;
let hands = [];
let modelReady = false;
let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);	              // 실시간 비디오 요소 생성
  handpose = ml5.handpose(video, getModel);	  // handpose 객체 생성→getModel() 호출
  handpose.on('hand', getResult);	            // 손 감지되면 ‘hand’ 이벤트 발생→getResult() 호출
}

function draw(){
  background(0);
  stroke(255);
  line(width/2, 0, width/2, height);	// 캔버스 중앙 세로선 그리기

  if (!modelReady) {			// 모델 로딩이 완료되기 전인 경우 사용! 
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text('handPose 모델 로딩 중!', width / 2, height / 2);
  }

  if (hands.length > 0) {		        // 손이 감지된 경우
    noStroke();
    if (x < width/2) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
    let annotations = hands[0].annotations;
    x = annotations.thumb[3][0];
    y = annotations.thumb[3][1];
    ellipse(x, y, 30, 30);		    // 엄지손가락 끝 포인트에 원 표시
  }
}

function getModel() {			                    // 콜백함수
  modelReady = true;
  console.log('handpose 모델 로딩 완료!');
}

function getResult(results) {		              // 콜백함수
  //console.log(results);			                // 인식 결과를 콘솔창에 출력
  hands = results;			                      // 인식 결과를 전역변수인 hands에 저장
}