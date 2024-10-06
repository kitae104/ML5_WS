let video;
let bodyPose;
let poses = [];

function preload() {    
    bodyPose = ml5.bodyPose('BlazePose');   // BlazePose 모델 로드
}

function setup() {
    createCanvas(640, 480);
    
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    
    bodyPose.detectStart(video, gotPoses);  // 포즈 추출 시작
}

function draw() {    
    image(video, 0, 0, width, height);  // 비디오 이미지 그리기
    
    // 포즈 키포인트 그리기
    for (let i = 0; i < poses.length; i++) {
        let pose = poses[i];
        for (let j = 0; j < pose.keypoints.length; j++) {
            let keypoint = pose.keypoints[j];
            fill(0, 255, 0);
            noStroke();
            circle(keypoint.x, keypoint.y, 10);
        }
    }

    // 스켈레톤 연결하기
}

// Callback function 
function gotPoses(results) {    
    poses = results;
}
