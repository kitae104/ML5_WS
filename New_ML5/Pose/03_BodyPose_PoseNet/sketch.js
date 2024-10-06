var video, model, detect;

var detects = [];
var modelState = '모델 로딩중...';

function detect(result) {
    detects = result;
    modelState = '';
}

function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    model = ml5.poseNet(video);
    model.on('pose', detect);
    video.hide();
}

function draw() {
    image(video, 0, 0, width, height);
    for (let i = 0; i < detects.length; i += 1) {
        var pose = detects[i].pose;
        for (let k = 0; k < pose.keypoints.length; k += 1) {
            var point = pose.keypoints[k];
            if (point.score > 0.2) {
                fill(255, 0, 0);
                noStroke();
                ellipse(point.position.x, point.position.y, 10, 10);
            }
        }
        var skeleton = detects[i].skeleton;
        for (let j = 0; j < skeleton.length; j += 1) {
            var pointA = skeleton[j][0];
            var pointB = skeleton[j][1];
            stroke(0, 255, 0);
            line(
                pointA.position.x,
                pointA.position.y,
                pointB.position.x,
                pointB.position.y
            );
        }
    }

    textSize(30);
    textAlign(CENTER);
    text(modelState, width / 2, height / 2);
}
