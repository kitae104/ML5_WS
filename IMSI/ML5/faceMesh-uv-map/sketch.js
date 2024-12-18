let faceMesh;
let video;
let faces = [];
let options = { maxFaces: 1, refineLandmarks: false, flipped: true };

let uvMapImage;

let triangulation;
let uvCoords;

function preload() {
    // faceMesh 모델 로드
    faceMesh = ml5.faceMesh(options);
    uvMapImage = loadImage("clouds.jpg");
}

function setup() {
    createCanvas(640, 480, WEBGL);
    // 웹캠 비디오를 생성하고 숨깁니다.
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();
    // 웹캠 비디오로부터 얼굴 감지를 시작합니다.
    faceMesh.detectStart(video, gotFaces);
    // uv 매핑을 위한 좌표를 가져옵니다.
    triangulation = faceMesh.getTriangles();
    uvCoords = faceMesh.getUVCoords();
}

function draw() {
    translate(-width / 2, -height / 2);
    background(51);

    for (let i = 0; i < faces.length; i++) {
        let face = faces[i];

        // 모든 삼각형을 그립니다.
        noStroke();
        texture(uvMapImage);
        textureMode(NORMAL);
        beginShape(TRIANGLES);
        for (let i = 0; i < triangulation.length; i++) {
            let indexA = triangulation[i][0];
            let indexB = triangulation[i][1];
            let indexC = triangulation[i][2];
            let a = face.keypoints[indexA];
            let b = face.keypoints[indexB];
            let c = face.keypoints[indexC];
            const uvA = { x: uvCoords[indexA][0], y: uvCoords[indexA][1] };
            const uvB = { x: uvCoords[indexB][0], y: uvCoords[indexB][1] };
            const uvC = { x: uvCoords[indexC][0], y: uvCoords[indexC][1] };
            vertex(a.x, a.y, uvA.x, uvA.y);
            vertex(b.x, b.y, uvB.x, uvB.y);
            vertex(c.x, c.y, uvC.x, uvC.y);
        }
        endShape();
    }
}

// faceMesh가 데이터를 출력할 때 호출되는 콜백 함수
function gotFaces(results) {
    // 결과를 faces 변수에 저장합니다.
    faces = results;
}
