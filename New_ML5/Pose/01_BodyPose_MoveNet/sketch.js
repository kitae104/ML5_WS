let video;
let bodyPose;
let poses = [];
let connections;

function preload() {
    bodyPose = ml5.bodyPose(); // 모델 로드
}

function setup() {
    createCanvas(640, 480); // 캔버스 생성

    video = createCapture(VIDEO); // 비디오 캡쳐 생성
    video.size(640, 480); // 비디오 사이즈 설정
    video.hide(); // 비디오 숨김

    bodyPose.detectStart(video, gotPoses); // 포즈 추출 시작
    connections = bodyPose.getSkeleton(); // 스켈레톤 연결 정보 가져오기
}

function draw() {
    image(video, 0, 0, width, height); // 비디오 이미지 그리기

    // 스켈레톤 연결하기
    for (let i = 0; i < poses.length; i++) {
        let pose = poses[i]; // 각 포즈 정보 가져오기
        for (let j = 0; j < connections.length; j++) {
            // 연결 정보를 이용하여 선 그리기
            let pointAIndex = connections[j][0]; // 첫번째 점 인덱스
            let pointBIndex = connections[j][1]; // 두번째 점 인덱스
            let pointA = pose.keypoints[pointAIndex]; // 첫번째 점 정보
            let pointB = pose.keypoints[pointBIndex]; // 두번째 점 정보

            // 두 점의 신뢰도가 0.1보다 크면 선 그리기
            if (pointA.confidence > 0.1 && pointB.confidence > 0.1) {
                stroke(255, 0, 0); // 선 색상 설정
                strokeWeight(2); // 선 두께 설정
                line(pointA.x, pointA.y, pointB.x, pointB.y); // 선 그리기
            }
        }
    }

    // 포즈 키포인트 그리기
    for (let i = 0; i < poses.length; i++) {
        let pose = poses[i]; // 각 포즈 정보 가져오기
        for (let j = 0; j < pose.keypoints.length; j++) {
            // 각 키포인트 정보 가져오기
            let keypoint = pose.keypoints[j]; // 키포인트 정보 가져오기
            // 신뢰도가 0.1보다 크면 원 그리기
            if (keypoint.confidence > 0.1) {
                fill(0, 255, 0); // 원 색상 설정
                noStroke(); // 선 없음
                circle(keypoint.x, keypoint.y, 10); // 원 그리기
            }
        }
    }
}

// 콜백 함수(포즈 정보 가져오기)
function gotPoses(results) {    
    poses = results;    // 결과를 포즈 정보로 저장
}