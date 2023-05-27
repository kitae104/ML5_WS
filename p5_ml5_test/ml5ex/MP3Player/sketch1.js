let img, song
let vol = 0.5;

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
}

function mp3_play(){
  if(song.isPlaying()){
    song.pause();
    playBtn.html('PLAY')
    background(255);
  } else {
    song.play();
    playBtn.html('PAUSE')
    background(img);
  }
}

function draw(){
  song.setVolume(volume.value());
  console.log(img);
  console.log(song);
}