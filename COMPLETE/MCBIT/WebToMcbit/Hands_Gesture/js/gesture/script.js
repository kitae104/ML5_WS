import { GestureRecognizer, FilesetResolver } from "./vision_bundle.js";

let gestureRecognizer = undefined;
let runningMode = "VIDEO";
let video = null;
let lastVideoTime = -1;
let results = undefined;

// GestureRecognizer 초기화
const createGestureRecognizer = async () => {
    const vision = await FilesetResolver.forVisionTasks("wasm");
    gestureRecognizer = await GestureRecognizer.createFromOptions(vision, {
        baseOptions: {
            modelAssetPath:
                "https://storage.googleapis.com/mediapipe-models/gesture_recognizer/gesture_recognizer/float16/1/gesture_recognizer.task",
            delegate: "GPU",
        },
        runningMode: runningMode,
        numHands: 2,
    });
    console.log("GestureRecognizer가 초기화되었습니다.");
    // 초기화 후 predictWebcam 실행
    if (video) {
        predictWebcam();
    }
};

// 초기화 호출
createGestureRecognizer().catch((error) =>
    console.error("GestureRecognizer 초기화에 실패했습니다:", error)
);

// 비디오 스트림 설정
export function setCameraStreamToMediaPipe(v) {
    video = v;

    // 비디오 데이터 로드 완료 후 GestureRecognizer 초기화 확인
    video.addEventListener("loadeddata", () => {
        if (gestureRecognizer) {
            predictWebcam();
        } else {
            console.log("GestureRecognizer 초기화를 기다리는 중...");
        }
    });
}
window.setCameraStreamToMediaPipe = setCameraStreamToMediaPipe;

// 제스처 인식 함수
async function predictWebcam() {
    // GestureRecognizer 초기화 상태 확인
    if (!gestureRecognizer) {
        console.error("GestureRecognizer가 초기화되지 않았습니다.");
        return;
    }

    if (runningMode === "IMAGE") {
        runningMode = "VIDEO";
        await gestureRecognizer.setOptions({ runningMode: "VIDEO" });
    }

    let startTimeMs = performance.now();
    if (lastVideoTime !== video.currentTime) {
        lastVideoTime = video.currentTime;

        try {
            // 비동기 호출
            results = await gestureRecognizer.recognizeForVideo(video, startTimeMs);
            gotGestures(results);
        } catch (error) {
            console.error("제스처 인식 중 오류 발생:", error);
        }
    }

    if (!video.paused) {
        window.requestAnimationFrame(predictWebcam);
    }
}