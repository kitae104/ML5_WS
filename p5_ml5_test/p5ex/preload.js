let img;

function preload() {
  img = loadImage("puffin.jpg");
}

function setup() {
  createCanvas(400, 240);
  image(img, 0, 0);
}
