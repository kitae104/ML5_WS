// poseNet: 캔버스 상에서 코의 좌우 위치에 따라 원의 색상 변경
let video;
let poseNet;
let poses = [];
let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  video = createCapture(VIDEO);		          // 실시간 비디오 요소 생성
  
  poseNet = ml5.poseNet(video, getModel);	  // poseNet 객체 생성→getModel() 호출
  poseNet.on('pose', getResult);	          // 포즈 감지되면 ‘pose’ 이벤트 발생→getResult() 호출
}

function draw(){
  // 페이딩 효과
  noStroke();
  fill(0, 10);
  rect(0, 0, width, height);

  stroke(255);
  line(width/2, 0, width/2, height);	      // 캔버스 중앙 세로선 그리기

  noStroke();
  
  if (x < width/2) {
    fill(255, 0, 0);        //  빨간색
  } else {
    fill(0, 255, 0);        //  녹색
  }

  if (poses.length > 0) {		      // 포즈가 있는 경우
    let pose = poses[0].pose;
    x = pose.nose.x;
    y = pose.nose.y;
    ellipse(x, y, 50, 50);		    // 코 포인트에 원 표시
  }
}

function getModel() {			                  // 콜백함수
  console.log('poseNet 모델 로딩 완료!');
}

function getResult(results) {		            // 콜백함수
  //console.log(results);			              // 인식 결과를 콘솔창에 출력
  poses = results;			                    // 인식 결과를 전역변수인 poses에 저장
}