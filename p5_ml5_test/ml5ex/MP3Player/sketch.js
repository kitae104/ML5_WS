let img, song, amp;
let vol = 0.5;
let x = 0, y=300;
let run = false;

function preload(){
  img = loadImage('ive.png');
  song = loadSound('iam.mp3');
}

function setup(){
  createCanvas(img.width, img.height);
  background(img);

  playBtn = createButton('PLAY');
  playBtn.size(60, 30);
  playBtn.position(10, height-20);
  playBtn.mousePressed(mp3_play);  
  volume = createSlider(0, 1, vol, 0.01);
  volume.size(500)
  volume.position(80, height-15);

  amp = new p5.Amplitude();
}

function mp3_play(){
  if(song.isPlaying()){
    run = false;
    song.pause();
    playBtn.html('PLAY')
    background(img);
  } else {
    run = true;
    song.play();
    playBtn.html('PAUSE')
    background(img);
  }
}

function draw(){
  song.setVolume(volume.value());
  console.log(img);
  console.log(song);

  if(run){
    let level = amp.getLevel();
    let vol = map(level, 0, 1, 0, 600);
    stroke(random(255), random(255), random(255));
    x++;
    x1 = x;
    y1 = y - vol;
    line(x, y, x1, y1);
    if(x > width){
      x = 0;
      background(img);
    }
  }
}