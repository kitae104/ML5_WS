let port;
let connectBtn;

let x = 100, y = 100, w = 200, h = 200;

function setup() {
  createCanvas(400, 400);
  background(220);

  port = createSerial();

  let usedPorts = usedSerialPorts();
  if (usedPorts.length > 0) {
    port.open(usedPorts[0], 9600);
  }

  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(80, 350);
  connectBtn.mousePressed(connectBtnClick);

  let sendBtn = createButton('Send hello');
  sendBtn.position(220, 350);
  sendBtn.mousePressed(sendBtnClick);

  background(0);
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(30);
  text("번호(1,2,3,4)를 눌러 RGB LED 제어하기", width/2, height/2);
}

function draw() {
  background(0);
  if (mouseX > x && mouseX < x+w && mouseY > y && mouseY < y+h) {
    fill(255, 0, 0);
    port.write(1);
  } else {
    fill(0, 255, 0);
    port.write(0);
  }
  rect(x, y, w, h);
}

function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}

function sendBtnClick() {
  port.write(1);
}

