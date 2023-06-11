// 가변저항값 송신
#define VARIABLE_R A1

void setup() {
  pinMode(VARIABLE_R, INPUT);
  Serial.begin(9600);
}

void loop( ) {
  int value = analogRead(VARIABLE_R);
  value = map(value, 0, 1023, 0, 255);
  Serial.write(value);
  delay(30);              // 전송 속도 30ms 지연
}
