// 아두이노: 수신된 정수(→0 또는 1)로 LED 점멸 제어

#define LED 6

void setup() {
  pinMode(LED, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  
}

void serialEvent() {          // 시리얼 버퍼에 값이 수신되면 자동 호출 
  int value = Serial.read();  // 1바이트 읽기 
  digitalWrite(LED, value);   // LED on/off
}
