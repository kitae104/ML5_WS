var results;
let cam = null;
let p5canvas = null;

function setup() {
    p5canvas = createCanvas(640, 480);
    p5canvas.parent('#canvas');

    // お手々が見つかると以下の関数が呼び出される．resultsに検出結果が入っている．
    gotDetections = function (_results) {
        results = _results;
        strokeWeight(5)
        let video_width = 640;
        let video_height = 480;

        // 取得したboundingBoxの値を現在のcanvas描画とあわせる前処理
        for (let d of results.detections) {
            let bb = d.boundingBox;
            let ratio = {
                x: width / video_width,
                y: height / video_height
            }
            bb.originX = ratio.x * bb.originX; //mirror: (video_width - bb.originX - bb.width);
            bb.originY = ratio.y * bb.originY;
            bb.width *= ratio.x;
            bb.height *= ratio.y;
        }
    }
}


function startWebcam() {
    // If the function setCameraStreamToMediaPipe is defined in the window object, the camera stream is set to MediaPipe.
    if (window.setCameraStreamToMediaPipe) {
        cam = createCapture(VIDEO);
        cam.hide();
        cam.elt.onloadedmetadata = function () {
            window.setCameraStreamToMediaPipe(cam.elt);
        }
        p5canvas.style('width', '100%');
        p5canvas.style('height', 'auto');
    }
}

function draw() {
    background(127);
    if (cam) {
        image(cam, 0, 0, width, height);
    }

    if (results) {
        for (let detection of results.detections) {
            let index = detection.categories[0].index;
            let bb = detection.boundingBox;
            let name = detection.categories[0].categoryName;
            let score = detection.categories[0].score;
            let c = getColorByIndex(index);
            c = [...c, 200];
            stroke(c);
            strokeWeight(2);
            noFill();
            rect(
                bb.originX, bb.originY,
                bb.width, bb.height
            )
            fill(c);
            rect(
                bb.originX, bb.originY - 20,
                bb.width, 20
            )

            noStroke();
            fill(255);
            textAlign(LEFT, CENTER);
            text(`[${index}] ${name} - ${score.toFixed(2)}`, bb.originX + 10, bb.originY - 10);
            index++;
        }
    }
    noFill();
    rect(0, 0, 640, 480);

}
function getColorByIndex(index) {
    const colors = [
        [240, 128, 128], // ライトコーラル
        [173, 216, 230], // ライトブルー
        [144, 238, 144], // ライトグリーン
        [220, 220, 220], // グレイ
        [244, 164, 96],  // ライトサーモン
        [192, 192, 192], // シルバー
        [255, 222, 173], // ナバホホワイト
        [175, 238, 238], // パオダーターコイズ
        [255, 228, 196], // ビスク
        [221, 160, 221], // プラム
        [250, 128, 114], // サーモン
        [152, 251, 152], // パレグリーン
        [176, 224, 230], // パウダーブルー
        [255, 218, 185], // ピーチパフ
        [240, 230, 140], // カーキ
        [240, 128, 128], // ライトコーラル
        [144, 238, 144], // ライトグリーン
        [192, 192, 192], // シルバー
        [255, 228, 196], // ビスク
        [250, 128, 114]  // サーモン
    ];

    if (index < 0) {
        index = 0;
    }

    index = index % colors.length;

    return colors[index];
}

