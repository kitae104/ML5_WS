function setup() {
  createCanvas(400, 240);
  loadImage("puffin.jpg", drawCat);
  background("lightpink");
}

function drawCat(img) {
  image(img, 0, 0);
}
