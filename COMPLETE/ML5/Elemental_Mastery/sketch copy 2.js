//====================================MAIN SKETCH====================================
//Global Variables:

// Speech Recognizer Settings
let speechRec;
let continuous = true;
let lang = navigator.language || "en-US";
let recognitionTimeout = 20000;
let lastSpeechTime;
let isRecognitionRunning = false;

//Element UI Settings
let elementRecognition = "off";
let currentElement = "off";
let airBool = false;
let waterBool = false;
let earthBool = false;
let fireBool = false;

//Handpose Settings:
let handpose;
let video;
let hands = [];

let Hand1CenterX;
let Hand1CenterY;
let prevHand1CenterX = 320;
let prevHand1CenterY = 240;
let deltaHand1X;
let deltaHand1Y;
let speedHand1;
let directionHand1;

let Hand2CenterX;
let Hand2CenterY;
let prevHand2CenterX = 320;
let prevHand2CenterY = 240;
let deltaHand2X;
let deltaHand2Y;
let speedHand2;
let directionHand2;

let HandsDist;

//Sound Settings:
let fireBaseBool = true;
let fireBlastBool = true;
let waterBaseBool = true;
let iceShardBool = true;
let earthWallBool = true;
let earthStonesBool = true;
let airBaseBool = true;
let airBallBool = true;

//=====================================SETUP=========================================

function preload() {
    // Handpose 초기화는 이제 setup()에서 처리합니다.

    // 사운드 포맷 지정
    soundFormats("mp3");

    // 사운드 로딩
    FireBase = loadSound("Sounds/FireBase.mp3");
    FireBlast = loadSound("Sounds/FireBlast.mp3");
    WaterBase = loadSound("Sounds/WaterBase.mp3");
    IceShard = loadSound("Sounds/IceShard.mp3");
    EarthWall = loadSound("Sounds/EarthWall.mp3");
    EarthStones = loadSound("Sounds/EarthStones.mp3");
    AirBase = loadSound("Sounds/AirBase.mp3");
    AirBall = loadSound("Sounds/AirBall.mp3");

    console.log("Sounds Loaded!");
}

function setup() {
    createCanvas(640, 480);
    noStroke();
    lastSpeechTime = millis();

    //Set up speech recognition settings
    speechRec = new p5.SpeechRec(lang, gotSpeech);
    speechRec.start(continuous);
    isRecognitionRunning = true;
    console.log("Speech Recognizer Loaded!");

    //Start the video
    video = createCapture(VIDEO);
    video.size(640, 480);
    video.hide();

    // Handpose 모델 로드 (ml5 v0.12.2 방식)
    handpose = ml5.handpose(video, modelLoaded);

    // 버튼 셋업(HTML에 존재한다고 가정)
    setupButton("fireButton", "fire");
    setupButton("airButton", "air");
    setupButton("waterButton", "water");
    setupButton("earthButton", "earth");
}

// 모델이 로드되었을 때 호출되는 콜백
function modelLoaded() {
    console.log("Handpose Model Loaded!");
    // 손 인식 이벤트 등록
    handpose.on("hand", gotHands);
}

// Speech Recognition 결과 처리
function gotSpeech() {
    if (speechRec.resultValue) {
        elementRecognition = speechRec.resultString.toLowerCase();
        lastSpeechTime = millis(); // Update the last speech time when speech is detected
        isRecognitionRunning = true; // Update recognition state
    } else {
        isRecognitionRunning = false; // Update recognition state
    }
}

// Handpose 결과 콜백
function gotHands(results) {
    hands = results;
    // console.log(hands);
}

//======================================DRAW=========================================
function draw() {

    // 매 프레임마다 hands가 비어있는지 확인
    if (hands.length === 0) {
        // 손이 인식되지 않았다면, 그냥 영상이나 다른 UI만 그려주고 return
        image(video, 0, 0, width, height);
        return;
    }

    // 음성 인식 재시작 로직
    if (millis() - lastSpeechTime > recognitionTimeout) {
        if (!isRecognitionRunning) {
            speechRec.start(continuous);
            isRecognitionRunning = true;
            lastSpeechTime = millis();
        }
    }

    background(220);
    image(video, 0, 0, width, height);
    ListenerForElements();
    getHandCoordinates();

    // 각 원소(에어, 물, 땅, 불)가 활성화되었으면 해당 bending 로직 실행
    if (fireBool) {
        FireBendingInitiate();
    }
    if (waterBool) {
        WaterBendingInitiate();
    }
    if (earthBool) {
        EarthBendingInitiate();
    }
    if (airBool) {
        AirBendingInitiate();
    }

    // console.log(elementRecognition); // 디버깅 용
}

//======================================HANDPOSE DATA=========================================
function drawKeyPoints() {
    for (let i = 0; i < hands.length; i++) {
        let hand = hands[i];
        for (let j = 0; j < hand.keypoints.length; j++) {
            let keypoint = hand.keypoints[j];
            fill(0, 255, 0);
            circle(keypoint.x, keypoint.y, 10);
        }
    }
}

function getHandCoordinates() {
    // 손이 전혀 인식되지 않았다면, 즉시 return
    if (hands.length === 0) {
        return;
    }

    // 손이 1개만 있을 때
    if (hands.length === 1) {
        fill(0, 255, 0);
    
        // hands[0]에 대한 참조 (단순화)
        let hand = hands[0];
    
        // 중지의 DIP 관절(annotations.middleFinger[2])
        let middleFingerDIP = hand.annotations.middleFinger[2]; 
        // 손바닥(손목 근처) 좌표(annotations.palmBase[0])
        let palmBase = hand.annotations.palmBase[0];            
    
        // middleFingerDIP와 palmBase는 각각 [x, y, z] 형태의 배열입니다.
        let midX = middleFingerDIP[0];
        let midY = middleFingerDIP[1];
        // let midZ = middleFingerDIP[2];  // z 좌표 필요 시
    
        let wristX = palmBase[0];
        let wristY = palmBase[1];
        // let wristZ = palmBase[2];      // z 좌표 필요 시
    
        // 중심 좌표 계산
        Hand1CenterX = (midX + wristX) / 2;
        Hand1CenterY = (midY + wristY) / 2;
    
        //Calculating the speeds of one hand
        deltaHand1X = Hand1CenterX - prevHand1CenterX;
        deltaHand1Y = Hand1CenterY - prevHand1CenterY;
        speedHand1 = dist(0, 0, deltaHand1X, deltaHand1Y);
        directionHand1 = atan2(deltaHand1Y, deltaHand1X) * (180 / PI);
    
        circle(Hand1CenterX, Hand1CenterY, 10);
    
        //Update Hand Speed Positions
        prevHand1CenterX = Hand1CenterX;
        prevHand1CenterY = Hand1CenterY;
    }
    // 손이 2개 이상 있을 때
    else if (hands.length === 2) {
        fill(0, 255, 0);
    
        // ------[ Hand 0의 좌표 ]------
        // 중지의 DIP 관절 (annotations.middleFinger[2])
        let midDip0 = hands[0].annotations.middleFinger[2];
        // 손바닥(손목 근처) 좌표 (annotations.palmBase[0])
        let palmBase0 = hands[0].annotations.palmBase[0];
    
        // 각각의 [x, y, z] 배열에서 x, y만 사용
        let midX0 = midDip0[0];
        let midY0 = midDip0[1];
        let palmX0 = palmBase0[0];
        let palmY0 = palmBase0[1];
    
        // 두 점(midDip, palmBase) 평균값으로 한 손의 중심을 잡는 예시
        Hand1CenterX = (midX0 + palmX0) / 2;
        Hand1CenterY = (midY0 + palmY0) / 2;
    
        // ------[ Hand 1의 좌표 ]------
        let midDip1 = hands[1].annotations.middleFinger[2];
        let palmBase1 = hands[1].annotations.palmBase[0];
        
        let midX1 = midDip1[0];
        let midY1 = midDip1[1];
        let palmX1 = palmBase1[0];
        let palmY1 = palmBase1[1];
    
        Hand2CenterX = (midX1 + palmX1) / 2;
        Hand2CenterY = (midY1 + palmY1) / 2;
    
        // ------[ 각 손의 이동 속도 & 방향 계산 ]------
        deltaHand1X = Hand1CenterX - prevHand1CenterX;
        deltaHand1Y = Hand1CenterY - prevHand1CenterY;
        speedHand1 = dist(0, 0, deltaHand1X, deltaHand1Y);
    
        deltaHand2X = Hand2CenterX - prevHand2CenterX;
        deltaHand2Y = Hand2CenterY - prevHand2CenterY;
        speedHand2 = dist(0, 0, deltaHand2X, deltaHand2Y);
    
        directionHand1 = atan2(deltaHand1Y, deltaHand1X) * (180 / PI);
        directionHand2 = atan2(deltaHand2Y, deltaHand2X) * (180 / PI);
    
        // ------[ 시각화 ]------
        circle(Hand1CenterX, Hand1CenterY, 10);
        circle(Hand2CenterX, Hand2CenterY, 10);
    
        // 두 손 사이 거리
        HandsDist = dist(
        Hand1CenterX, Hand1CenterY,
        Hand2CenterX, Hand2CenterY
        );
    
        // ------[ 이전 프레임 좌표 업데이트 ]------
        prevHand1CenterX = Hand1CenterX;
        prevHand1CenterY = Hand1CenterY;
        prevHand2CenterX = Hand2CenterX;
        prevHand2CenterY = Hand2CenterY;
    }
}

//================================BENDING INITIATE FUNCTIONS===================================
// 이 아래부턴 기존 파티클 / 소리 로직 그대로 유지 (ml5.handpose 사용 방식만 변경됨)

// FireBending
function FireBendingInitiate() {
    // Base Firebending
    if (hands.length > 0) {
        if (fireBaseBool) {
            FireBase.play();
            FireBase.setVolume(0.2);
            FireBase.loop();
            fireBaseBool = false;
            fireBlastBool = true;
        }

        if (hands.length > 1) {
            fireParticles.push(new FireBending(Hand1CenterX, Hand1CenterY));
            fireParticles.push(new FireBending(Hand2CenterX, Hand2CenterY));
        } else if (hands.length > 0 && hands.length < 2) {
            fireParticles.push(new FireBending(Hand1CenterX, Hand1CenterY));
            if (speedHand1 >= fireMoveSpeed) {
                fireMoveBool = true;
                currentMove1Direction = directionHand1;
            }
        }
    } else {
        FireBase.stop();
        fireBaseBool = true;
    }

    if (fireMoveBool) {
        FireBase.stop();
        if (fireBlastBool) {
            FireBlast.play();
            fireBlastBool = false;
        }

        fireMoveDelay--;

        if (fireMoveDelay <= 0) {
            fireMoveBool = false;
            fireMoveDelay = 120;
            fireBaseBool = true;
        }
    }

    for (let i = fireParticles.length - 1; i >= 0; i--) {
        fireParticles[i].update(fireMoveBool, currentMove1Direction);
        fireParticles[i].show();
        fireParticles[i].shrink();

        if (fireParticles[i].size <= 0) {
            fireParticles.splice(i, 1);
        }
    }
}

// WaterBending
function WaterBendingInitiate() {
    //Initiate the water particles
    if (waterGate) {
        for (let i = 0; i < 50; i++) {
            waterParticles.push(new WaterBending());
        }
        waterGate = false;
    }

    if (hands.length > 0) {
        if (waterBaseBool) {
            WaterBase.play();
            WaterBase.setVolume(0.2);
            IceShard.setVolume(0.4);
            WaterBase.loop();
            waterBaseBool = false;
            iceShardBool = true;
        }

        if (speedHand1 >= waterMoveSpeed || speedHand2 >= waterMoveSpeed) {
            let randomIndex = floor(random(waterParticles.length));
            let particle = waterParticles[randomIndex];
            let waterMoveDirection =
                speedHand1 > speedHand2 ? directionHand1 : directionHand2;

            particle.turnToIceShard();
            particle.flyInDirection(waterMoveDirection);
            iceShardDuration = 120;
        }

        waterParticles.forEach((waterParticle) => {
            waterParticles.forEach((otherWaterParticle) => {
                waterParticle.applyForce(
                    waterParticle.interaction(otherWaterParticle)
                );
            });

            waterParticle.attractToHands();
            waterParticle.show();
            waterParticle.update();
        });
    } else {
        WaterBase.stop();
        waterBaseBool = true;

        waterParticles.forEach((waterParticle) => {
            waterParticle.applyNeutral();
            waterParticles.forEach((otherWaterParticle) => {
                waterParticle.applyForce(
                    waterParticle.interaction(otherWaterParticle)
                );
            });
            waterParticle.show();
            waterParticle.update();
        });
    }

    // Update Ice Shard
    if (iceShardDuration > 0) {
        iceShardDuration--;
    } else {
        iceShardBool = true;
        waterParticles.forEach((particle) => particle.resetIceShard());
    }
}

// EarthBending
function EarthBendingInitiate() {
    // 땅 생성 (ground)
    if (earthGate) {
        for (let i = 0; i < groundDetail; i++) {
            ground[i] = height - 50 + random(-10, 10); // 랜덤 지형
        }
        earthGate = false;
    }

    fill(139, 69, 19); // Brown color
    beginShape();
    vertex(0, height);
    for (let i = 0; i < groundDetail; i++) {
        let x = (i / (groundDetail - 1)) * width;
        let y = ground[i];
        vertex(x, y);
    }
    vertex(width, height);
    endShape(CLOSE);

    if (hands.length > 0) {
        if (hand1EarthWall || hand2EarthWall) {
            if (earthWallBool) {
                EarthWall.play();
                EarthWall.setVolume(2);
                earthWallBool = false;
                earthStonesBool = true;
            }
        } else {
            EarthWall.stop();
            earthWallBool = true;
        }

        // 한 손
        if (hands.length > 0 && hands.length < 2) {
            if (Hand1CenterY < 150) {
                hand1EarthWall = true;
            } else {
                hand1EarthWall = false;
            }

            if (hand1EarthWall) {
                earthWallHand1.push(
                    new EarthBending(Hand1CenterX, height - 50)
                );
            }

            for (let i = earthWallHand1.length - 1; i >= 0; i--) {
                earthWallHand1[i].moveUp(hand1EarthWall, false, 0.075);
                earthWallHand1[i].display();
                if (
                    deltaHand1X > earthPushSpeed ||
                    deltaHand1X < -earthPushSpeed
                ) {
                    earthWallHand1[i].punchRocks(directionHand1);
                }

                if (!hand1EarthWall) {
                    earthWallHand1[i].applyGravity();
                }

                if (earthWallHand1[i].isOnGround()) {
                    earthWallHand1[i].fade();
                    if (earthWallHand1[i].finished()) {
                        earthWallHand1.splice(i, 1);
                    }
                }
            }
        }
        // 두 손
        if (hands.length > 1) {
            if (Hand1CenterY < 150) {
                hand1EarthWall = true;
            } else {
                hand1EarthWall = false;
            }

            if (Hand2CenterY < 150) {
                hand2EarthWall = true;
            } else {
                hand2EarthWall = false;
            }

            if (hand1EarthWall) {
                earthWallHand1.push(
                    new EarthBending(Hand1CenterX, height - 50)
                );

                for (let i = earthWallHand1.length - 1; i >= 0; i--) {
                    earthWallHand1[i].moveUp(hand1EarthWall, false, 0.025);
                    earthWallHand1[i].display();
                    if (
                        deltaHand1X > earthPushSpeed ||
                        deltaHand1X < -earthPushSpeed
                    ) {
                        earthWallHand1[i].punchRocks(directionHand1);
                    }
                }
            } else {
                for (let i = earthWallHand1.length - 1; i >= 0; i--) {
                    earthWallHand1[i].applyGravity();
                    if (earthWallHand1[i].isOnGround()) {
                        earthWallHand1[i].fade();
                        if (earthWallHand1[i].finished()) {
                            earthWallHand1.splice(i, 1);
                        }
                    }
                }
            }

            if (hand2EarthWall) {
                earthWallHand2.push(
                    new EarthBending(Hand2CenterX, height - 50)
                );

                for (let i = earthWallHand2.length - 1; i >= 0; i--) {
                    earthWallHand2[i].moveUp(
                        hand1EarthWall,
                        hand2EarthWall,
                        0.025
                    );
                    earthWallHand2[i].display();
                    if (
                        deltaHand2X > earthPushSpeed ||
                        deltaHand2X < -earthPushSpeed
                    ) {
                        earthWallHand2[i].punchRocks(directionHand2);
                    }
                }
            } else {
                for (let i = earthWallHand2.length - 1; i >= 0; i--) {
                    earthWallHand2[i].applyGravity();
                    if (earthWallHand2[i].isOnGround()) {
                        earthWallHand2[i].fade();
                        if (earthWallHand2[i].finished()) {
                            earthWallHand2.splice(i, 1);
                        }
                    }
                }
            }
        }

        // 한 손 내렸을 때
        if (!hand1EarthWall) {
            for (let i = earthWallHand1.length - 1; i >= 0; i--) {
                earthWallHand1[i].display();
                earthWallHand1[i].applyGravity();
                if (earthWallHand1[i].isOnGround()) {
                    earthWallHand1[i].fade();
                    if (earthWallHand1[i].finished()) {
                        earthWallHand1.splice(i, 1);
                    }
                }
            }
        }

        // 다른 한 손 내렸을 때
        if (!hand2EarthWall) {
            for (let i = earthWallHand2.length - 1; i >= 0; i--) {
                earthWallHand2[i].display();
                earthWallHand2[i].applyGravity();
                if (earthWallHand2[i].isOnGround()) {
                    earthWallHand2[i].fade();
                    if (earthWallHand2[i].finished()) {
                        earthWallHand2.splice(i, 1);
                    }
                }
            }
        }
    } else {
        // 손이 하나도 없을 경우
        for (let i = earthWallHand1.length - 1; i >= 0; i--) {
            earthWallHand1[i].display();
            earthWallHand1[i].applyGravity();
            if (earthWallHand1[i].isOnGround()) {
                earthWallHand1[i].fade();
                if (earthWallHand1[i].finished()) {
                    earthWallHand1.splice(i, 1);
                }
            }
        }

        for (let i = earthWallHand2.length - 1; i >= 0; i--) {
            earthWallHand2[i].display();
            earthWallHand2[i].applyGravity();
            if (earthWallHand2[i].isOnGround()) {
                earthWallHand2[i].fade();
                if (earthWallHand2[i].finished()) {
                    earthWallHand2.splice(i, 1);
                }
            }
        }
    }
}

// AirBending
function AirBendingInitiate() {
    if (hands.length > 0) {
        if (hands.length > 1) {
            let airballCenter = createVector(
                (Hand1CenterX + Hand2CenterX) / 2,
                (Hand1CenterY + Hand2CenterY) / 2
            );
            airballParticles.push(
                new AirBending(airballCenter.x, airballCenter.y)
            );
            airMoveBool = true;
        } else if (hands.length > 0 && hands.length < 2) {
            airParticles.push(new AirBending(Hand1CenterX, Hand1CenterY));
            airMoveBool = false;

            if (airBaseBool) {
                AirBase.play();
                AirBase.loop();
                airBaseBool = false;
                airBallBool = true;
            }
        }

        if (millis() - lastNoiseChange > noiseChangeInterval) {
            noiseSeed(millis());
            lastNoiseChange = millis();
        }

        for (let i = 0; i < airParticles.length; i++) {
            airParticles[i].update();
            airParticles[i].display();

            if (airParticles[i].onScreen == false) {
                airParticles.splice(i, 1);
            }
        }

        if (airMoveBool) {
            if (airBallBool) {
                AirBall.play();
                AirBall.loop();
                AirBall.setVolume(0.1);
                airBallBool = false;
            }

            for (let i = airballParticles.length - 1; i >= 0; i--) {
                airballParticles[i].concentrateAtCenter(
                    Hand1CenterX,
                    Hand2CenterX,
                    Hand1CenterY,
                    Hand2CenterY,
                    HandsDist
                );
                airballParticles[i].display();
                airballParticles[i].fade();
                if (airballParticles[i].finished()) {
                    airballParticles.splice(i, 1);
                }
            }
        } else {
            if (airballParticles.length != 0) {
                for (let i = airballParticles.length - 1; i >= 0; i--) {
                    airballParticles[i].update();
                    airballParticles[i].display();
                    airballParticles[i].fade();
                    if (airballParticles[i].finished()) {
                        airballParticles.splice(i, 1);
                    }
                }
            }

            AirBall.stop();
            airBallBool = true;
        }
    } else {
        AirBase.stop();
        airBaseBool = true;

        if (airParticles.length != 0) {
            for (let i = airParticles.length - 1; i >= 0; i--) {
                airParticles[i].update();
                airParticles[i].display();
                airParticles[i].fade();
                if (airParticles[i].finished()) {
                    airParticles.splice(i, 1);
                }
            }
        }

        if (airballParticles.length != 0) {
            for (let i = airballParticles.length - 1; i >= 0; i--) {
                airballParticles[i].update();
                airballParticles[i].display();
                airballParticles[i].fade();
                if (airballParticles[i].finished()) {
                    airballParticles.splice(i, 1);
                }
            }
        }
    }
}
