/*
 * @name WebUSB RGB Control
 * @description This example sends and receives multiple values to micro:bit over WebUSB. 
 *  Using microbit-webusb library. https://github.com/bsiever/microbit-webusb
 */
let connectBtn;


let sliderR;
let sliderG;
let sliderB;

let brightness = 0;
let sendText = "sent:";
let recvText = "recv:";

let R = 0;
let G = 0;
let B = 0;

let microBit;


function setup() {
  createCanvas(400, 400);
  
  
  microBit = new uBitWebUSB();

  microBit.onConnect(function () {
    console.log("connected");
  });

  microBit.onDisconnect(function () {
    console.log("disconnected");
  });

  microBit.onReceiveSerial(handleData);

  connectBtn = createButton("connect");
  connectBtn.position(20, height - 30);
  // connectBtn.mousePressed(connect);
  connectBtn.mousePressed(function() {microBit.connectDevice()});
  
  connectBtn.style("width:180px");

  disconnectBtn = createButton("disconnect");
  disconnectBtn.position(200, height - 30);
  // disconnectBtn.mousePressed(disconnect);
  disconnectBtn.mousePressed(function() {microBit.disconnectDevice()});
  
  disconnectBtn.style("width:180px");

 
  // Red Slider
  sliderR = createSlider(0,255);
  sliderR.position(width/2 - 175, 10);
  sliderR.changed(sliderInput);
  sliderR.style("width:350px");

  // Green Slider
  sliderG = createSlider(0,255);
  sliderG.position(width/2 - 175, 35);
  sliderG.changed(sliderInput);
  sliderG.style("width:350px");
  
  // Blue Slider
  sliderB = createSlider(0,255);
  sliderB.position(width/2 - 175, 60);
  sliderB.changed(sliderInput);
  sliderB.style("width:350px");
}

function draw() {
  background(color(R,G,B));
  fill(255);
  textSize(32);
  text(sendText,20,100);
  text(recvText,20,125);
    
}

function sliderInput(){
  //print(slider.value());
  R = sliderR.value();
  G = sliderG.value();
  B = sliderB.value();
  let sendData = R + "," + G + "," + B;
  send(sendData);

}

function send(data){
  if(microBit.connected){
  sendText = "sent: "+data; 
  microBit.sendSerial(data);
  }else{
    print("device not connected!");
  }
}

function connect() {
  microBit.ConnectDevice(uBitEventHandler);

}

function disconnect() {
  //connectedDevice.close();
  microBit.disconnectDevice(connectedDevice);

}

function handleData(data){
  //print(data);
  recvText = "recv: "+ data;
  brightness = int(data);
  
}


