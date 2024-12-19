const s = (sketch) => {
    let bodypix;
    let video;
    let segmentation;

    const options = {
        outputStride: 8, // 8, 16, 또는 32, 기본값은 16
        segmentationThreshold: 0.3 // 0 - 1 사이 값, 기본값은 0.5
    }

    sketch.setup = function () {
        // p5 인스턴스를 설정하여 ml5가 사용할 인스턴스를 알 수 있도록 함
        ml5.p5Utils.setP5Instance(sketch);
        
        sketch.createCanvas(320, 240);

        // 비디오를 로드
        video = sketch.createCapture(sketch.VIDEO);
        video.size(sketch.width, sketch.height);
        
        // video.hide(); // 비디오 요소를 숨기고 캔버스만 표시
        bodypix = ml5.bodyPix(video, modelReady);
    }

    function modelReady() {
        console.log('준비 완료!');
        bodypix.segment(gotResults, options);
    }

    function gotResults(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        // console.log(result);
        segmentation = result;

        sketch.background(0);
        
        // sketch.image(video, 0, 0, sketch.width, sketch.height);
        sketch.image(segmentation.backgroundMask, 0, 0, sketch.width, sketch.height);

        bodypix.segment(gotResults, options);
    }
}

let myp5 = new p5(s, document.getElementById('p5sketch'));
