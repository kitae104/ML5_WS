// 수신된 정수로 DC 모터 제어
#define DCMOTOR_FWD 9
#define DCMOTOR_BWD 10

void setup() {
  pinMode(DCMOTOR_FWD, OUTPUT);
  pinMode(DCMOTOR_BWD, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  while(Serial.available()){      // 검사
    int value = Serial.read();    // 수신 
    if(value == 1) {
      digitalWrite(DCMOTOR_FWD, 1);
      digitalWrite(DCMOTOR_BWD, 0);
    } else {
      digitalWrite(DCMOTOR_FWD, 0);
      digitalWrite(DCMOTOR_BWD, 0);
    }
  }
}
