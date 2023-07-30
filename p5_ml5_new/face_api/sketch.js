// faceApi를 이용한 얼굴 인식

// 전역 변수
let faceapi;
let video;
let detections;

// 얼굴 인식 옵션
const detection_options = {
    withLandmarks: true,        // 얼굴 랜드마크
    withDescriptors: false,     // 얼굴 특징
}

// 초기화
function setup() {
    createCanvas(360, 270);           

    // 비디오 요소 생성
    video = createCapture(VIDEO);
    video.size(width, height);        // 비디오 크기 설정
    video.hide();                     // 비디오 요소를 숨김 
    faceapi = ml5.faceApi(video, detection_options, modelReady)  // 비디오 요소를 이용하여 faceapi 생성 
    textAlign(RIGHT);                 // 텍스트 정렬을 오른쪽으로 설정
}

function modelReady() {
    console.log('ready!')
    console.log(faceapi)
    faceapi.detect(gotResults)
}

function gotResults(err, result) {
    if (err) {
        console.log(err)
        return
    }
    // console.log(result)
    detections = result;

    // background(220);
    background(255);
    image(video, 0,0, width, height)
    if (detections) {
        if (detections.length > 0) {
            // console.log(detections)
            drawBox(detections)
            drawLandmarks(detections)
        }
    }
    faceapi.detect(gotResults)
}

function drawBox(detections){
    for(let i = 0; i < detections.length; i++){
        const alignedRect = detections[i].alignedRect;
        const x = alignedRect._box._x
        const y = alignedRect._box._y
        const boxWidth = alignedRect._box._width
        const boxHeight  = alignedRect._box._height
        
        noFill();
        stroke(161, 95, 251);
        strokeWeight(2);
        rect(x, y, boxWidth, boxHeight);
    }
    
}

function drawLandmarks(detections){
    noFill();
    stroke(161, 95, 251)
    strokeWeight(2)

    for(let i = 0; i < detections.length; i++){
        const mouth = detections[i].parts.mouth; 
        const nose = detections[i].parts.nose;
        const leftEye = detections[i].parts.leftEye;
        const rightEye = detections[i].parts.rightEye;
        const rightEyeBrow = detections[i].parts.rightEyeBrow;
        const leftEyeBrow = detections[i].parts.leftEyeBrow;

        drawPart(mouth, true);
        drawPart(nose, false);
        drawPart(leftEye, true);
        drawPart(leftEyeBrow, false);
        drawPart(rightEye, true);
        drawPart(rightEyeBrow, false);
    }
}

function drawPart(feature, closed){
    
    beginShape();
    for(let i = 0; i < feature.length; i++){
        const x = feature[i]._x
        const y = feature[i]._y
        vertex(x, y)
    }
    
    if(closed === true){
        endShape(CLOSE);
    } else {
        endShape();
    }    
}