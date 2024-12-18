let classifier;
let handPose;
let video;
let hands = [];
let rockDataCount = 0;
let paperDataCount = 0;
let scissorsDataCount = 0;
let isTrained = false;
let classification = "";

// UI 요소
let instructionP;
let dataCountsP;
let rockButton;
let paperButton;
let scissorsButton;
let trainButton;

function preload() {
    // handPose 모델을 로드합니다. 우리는 handPose로부터 키포인트를 가져와서 신경망 훈련에 사용할 것입니다.
    handPose = ml5.handPose();
}

function setup() {
    createCanvas(640, 480);

    // 웹캠 비디오를 생성하고 숨깁니다.
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    // 훈련용 UI 버튼을 설정합니다.
    instructionP = createP(
        '데이터를 추가하려면 "Add Rock Data" 버튼을 누르는 동안 바위 제스처를 취해주세요. 종이와 가위에 대해서도 같은 방식으로 진행합니다. 각 제스처 클래스에 대한 충분한 데이터가 수집되면 "Train and Save Model" 버튼을 눌러 모델을 훈련하고, 이후 사용을 위해 모델을 저장할 수 있습니다.'
    );
    instructionP.style("width", "640px");
    dataCountsP = createP(
        "Rock data: " +
            rockDataCount +
            "<br>Paper data: " +
            paperDataCount +
            "<br>Scissors data: " +
            scissorsDataCount
    );
    rockButton = createButton("Add Rock Data");
    rockButton.mousePressed(addRockData);
    paperButton = createButton("Add Paper Data");
    paperButton.mousePressed(addPaperData);
    scissorsButton = createButton("Add Scissors Data");
    scissorsButton.mousePressed(addScissorsData);
    trainButton = createButton("Train and Save Model");
    trainButton.mousePressed(train);

    // 모든 브라우저에서 작동하기 위해
    // "webgl" 또는 "cpu" 백엔드를 설정해야 합니다.
    ml5.setBackend("webgl");

    // 신경망을 설정합니다.
    let classifierOptions = {
        task: "classification",
        debug: true,
    };
    classifier = ml5.neuralNetwork(classifierOptions);

    // handPose 감지를 시작합니다.
    handPose.detectStart(video, gotHands);
}

function draw() {
    // 웹캠 비디오를 표시합니다.
    image(video, 0, 0, width, height);

    // handPose 키포인트를 그립니다.
    if (hands[0]) {
        let hand = hands[0];
        for (let i = 0; i < hand.keypoints.length; i++) {
            let keypoint = hand.keypoints[i];
            fill(0, 255, 0);
            noStroke();
            circle(keypoint.x, keypoint.y, 10);
        }
    }

    // 모델이 훈련되었다면 분류를 수행하고 결과를 표시합니다.
    if (isTrained && hands[0]) {
        let inputData = flattenHandData();
        classifier.classify(inputData, gotClassification);
        textSize(64);
        fill(0, 255, 0);
        text(classification, 20, 60);
    }
}

// handPose가 데이터를 반환할 때 호출되는 콜백 함수
function gotHands(results) {
    hands = results;
}

// 분류기가 분류를 수행한 후 호출되는 콜백 함수
function gotClassification(results) {
    classification = results[0].label;
}

// handPose 데이터를 1차원 배열로 변환하는 함수
function flattenHandData() {
    let hand = hands[0];
    let handData = [];
    for (let i = 0; i < hand.keypoints.length; i++) {
        let keypoint = hand.keypoints[i];
        handData.push(keypoint.x);
        handData.push(keypoint.y);
    }
    return handData;
}

// 현재 handPose 데이터를 "Rock" 클래스로 분류기 데이터에 추가
function addRockData() {
    if (hands[0]) {
        let inputData = flattenHandData();
        let outputData = ["Rock"];
        classifier.addData(inputData, outputData);
        rockDataCount++;
    }
    updateDataCountUI();
}

// 현재 handPose 데이터를 "Paper" 클래스로 분류기 데이터에 추가
function addPaperData() {
    if (hands[0]) {
        let inputData = flattenHandData();
        let outputData = ["Paper"];
        classifier.addData(inputData, outputData);
        paperDataCount++;
    }
    updateDataCountUI();
}

// 현재 handPose 데이터를 "Scissors" 클래스로 분류기 데이터에 추가
function addScissorsData() {
    if (hands[0]) {
        let inputData = flattenHandData();
        let outputData = ["Scissors"];
        classifier.addData(inputData, outputData);
        scissorsDataCount++;
    }
    updateDataCountUI();
}

// 현재 데이터 카운트를 HTML UI에 업데이트
function updateDataCountUI() {
    dataCountsP.html(
        "Rock data: " +
            rockDataCount +
            "<br>Paper data: " +
            paperDataCount +
            "<br>Scissors data: " +
            scissorsDataCount
    );
}

// "Train abd Save Model" 버튼을 누르면 데이터 훈련을 시작
function train() {
    // 훈련 전 데이터 정규화
    classifier.normalizeData();

    // 모델 훈련
    let trainingOptions = {
        epochs: 50,
    };
    classifier.train(trainingOptions, finishedTraining);
}

// 모델 훈련이 끝나면 모델을 저장
function finishedTraining() {
    console.log("Training finished!");
    classifier.save();
    isTrained = true;
}
