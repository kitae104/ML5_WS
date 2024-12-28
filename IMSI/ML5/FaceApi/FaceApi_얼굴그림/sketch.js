let faceapi;
let video;
let detections;

// 기본적으로 모든 옵션이 true로 설정되어 있음
const detection_options = {
    withLandmarks: true, // 얼굴 특징점을 포함할지 여부
    withDescriptors: false, // 얼굴 특징 벡터를 포함할지 여부
}

function setup() {
    createCanvas(360, 270);

    // 비디오를 로드
    video = createCapture(VIDEO);
    video.size(width, height);
    // video.hide(); // 비디오 요소를 숨기고 캔버스만 표시
    faceapi = ml5.faceApi(video, detection_options, modelReady);
    textAlign(RIGHT);
}

function modelReady() {
    console.log('모델 준비 완료!');
    console.log(faceapi);
    faceapi.detect(gotResults);
}

function gotResults(err, result) {
    if (err) {
        console.log(err);
        return;
    }
    // console.log(result)
    detections = result;

    // 배경 초기화
    background(255);
    image(video, 0, 0, width, height);

    if (detections) {
        if (detections.length > 0) {
            // console.log(detections)
            drawBox(detections); // 얼굴 박스를 그림
            drawLandmarks(detections); // 얼굴 특징점을 그림
        }
    }
    faceapi.detect(gotResults);
}

function drawBox(detections) {
    for (let i = 0; i < detections.length; i++) {
        const alignedRect = detections[i].alignedRect;
        const x = alignedRect._box._x;
        const y = alignedRect._box._y;
        const boxWidth = alignedRect._box._width;
        const boxHeight = alignedRect._box._height;

        noFill();
        stroke(161, 95, 251);
        strokeWeight(2);
        rect(x, y, boxWidth, boxHeight); // 얼굴 영역 박스를 그림
    }
}

function drawLandmarks(detections) {
    noFill();
    stroke(161, 95, 251);
    strokeWeight(2);

    for (let i = 0; i < detections.length; i++) {
        const mouth = detections[i].parts.mouth; // 입 부분
        const nose = detections[i].parts.nose; // 코 부분
        const leftEye = detections[i].parts.leftEye; // 왼쪽 눈 부분
        const rightEye = detections[i].parts.rightEye; // 오른쪽 눈 부분
        const rightEyeBrow = detections[i].parts.rightEyeBrow; // 오른쪽 눈썹 부분
        const leftEyeBrow = detections[i].parts.leftEyeBrow; // 왼쪽 눈썹 부분

        drawPart(mouth, true); // 입을 그림
        drawPart(nose, false); // 코를 그림
        drawPart(leftEye, true); // 왼쪽 눈을 그림
        drawPart(leftEyeBrow, false); // 왼쪽 눈썹을 그림
        drawPart(rightEye, true); // 오른쪽 눈을 그림
        drawPart(rightEyeBrow, false); // 오른쪽 눈썹을 그림
    }
}

function drawPart(feature, closed) {
    beginShape();
    for (let i = 0; i < feature.length; i++) {
        const x = feature[i]._x;
        const y = feature[i]._y;
        vertex(x, y); // 특징점 좌표를 그림
    }

    if (closed === true) {
        endShape(CLOSE); // 닫힌 도형으로 그림
    } else {
        endShape(); // 열린 도형으로 그림
    }
}
