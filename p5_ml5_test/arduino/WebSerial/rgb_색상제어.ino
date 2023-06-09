#define RedLED 11
#define GreenLED 5
#define BlueLED 3

void setup() {
  pinMode(RedLED, OUTPUT);
  pinMode(GreenLED, OUTPUT);
  pinMode(BlueLED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
 
}

// 수신값이 있으면 자동 호출 
void serialEvent(){
  int value = Serial.read();
  if(value == 1){
    setColor(255, 0, 0);
  } else if(value == 2){
    setColor(0, 255, 0);
  } else if(value == 3){
    setColor(0, 0, 255);
  } else if(value == 4){
    setColor(255, 255, 0);
  } else {
    setColor(0, 0, 0);
  }
}

// 색상을 결정하는 함수 
void setColor(int Red, int Green, int Blue) {
  analogWrite(RedLED, Red);
  analogWrite(GreenLED, Green);
  analogWrite(BlueLED, Blue);  
}
