function setup() {
  createCanvas(400, 400);
}
var backgroundColor = "red"
var tempMap = 0.0
function draw() {
var lcol = lerpColor(color("white"),color(backgroundColor),tempMap)
background(lcol)
}
function mousePressed(){
  microBitConnect();
}

function microBitReceivedMessage(message){ 
  var temp = int(message)
  if (temp > 35) {
    backgroundColor = "red"
  } else {
    backgroundColor = "blue"
  }
  var absTemp = abs(temp - 20)
  tempMap = map (absTemp, 0, 10, 0, 1)
}
