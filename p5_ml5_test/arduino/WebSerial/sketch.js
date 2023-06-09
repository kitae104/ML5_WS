let port;
let connectBtn;

function setup() {
  createCanvas(400, 400);
  background(220);

  port = createSerial();

  let usedPorts = usedSerialPorts();
  if (usedPorts.length > 0) {
    port.open(usedPorts[0], 9600);
  }

  connectBtn = createButton('Connect to Arduino');
  connectBtn.position(80, 200);
  connectBtn.mousePressed(connectBtnClick);

  let sendBtn = createButton('Send hello');
  sendBtn.position(220, 200);
  sendBtn.mousePressed(sendBtnClick);

  background(0);
  fill(255, 255, 0);
  textAlign(CENTER);
  textSize(30);
  text("번호(1,2,3,4)를 눌러 RGB LED 제어하기", width/2, height/2);
}

function draw() {
  // this makes received text scroll up
  //copy(0, 0, width, height, 0, -1, width, height);

  // reads in complete lines and prints them at the
  // bottom of the canvas
  let str = port.readUntil("\n");
  if (str.length > 0) {
    text(str, 10, height-20);
  }

  // changes button label based on connection status
  if (!port.opened()) {
    connectBtn.html('Connect to Arduino');
  } else {
    connectBtn.html('Disconnect');
  }
}

function connectBtnClick() {
  if (!port.opened()) {
    port.open('Arduino', 9600);
  } else {
    port.close();
  }
}

function sendBtnClick() {
  port.write("Hello from p5.js\n");
}

function keyPressed() {
  if(key === '1'){
    port.write(1);              // 1 송신
    num = 1;
  } else if(key === '2'){
    port.write(2);              // 2 송신
    num = 2;
  } else if(key === '3'){
    port.write(3);              // 3 송신
    num = 3;
  } else if(key === '4'){
    port.write(4);              // 4 송신
    num = 4;
  }
}