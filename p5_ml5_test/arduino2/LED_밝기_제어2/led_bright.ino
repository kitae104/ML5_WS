// 수신된 정수로 LED 밝기 제어
#define LED 6

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  while(Serial.available()){
    int value = Serial.read();
    analogWrite(LED, value);
  }
}

