let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  // 단일 감지를 위한 새로운 poseNet 메서드 생성
  poseNet = ml5.poseNet(video, modelReady);
  // 새로운 자세가 감지될 때마다 "poses" 전역 변수를 배열로 채우는 이벤트 설정
  poseNet.on('pose', function(results) {
    poses = results;
  });
  // 비디오 요소를 숨기고 캔버스만 표시
  video.hide();
}

function modelReady() {
  select('#status').html('모델이 로드되었습니다');
}

function draw() {
  image(video, 0, 0, width, height);

  // 모든 키포인트와 스켈레톤을 그리는 함수를 호출
  drawKeypoints();
  drawSkeleton();
}

// 감지된 키포인트에 원을 그리는 함수
function drawKeypoints() {
  // 감지된 모든 자세를 반복 처리
  for (let i = 0; i < poses.length; i++) {
    // 감지된 각 자세에 대해 모든 키포인트를 반복 처리
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // 키포인트는 오른팔, 왼쪽 어깨 같은 신체 부위를 설명하는 객체
      let keypoint = pose.keypoints[j];
      // 자세 확률이 0.2보다 클 경우에만 원을 그림
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// 스켈레톤을 그리는 함수
function drawSkeleton() {
  // 감지된 모든 스켈레톤을 반복 처리
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // 각 스켈레톤에 대해 모든 신체 연결을 반복 처리
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
