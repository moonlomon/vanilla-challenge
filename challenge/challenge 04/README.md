# 바닐라챌린지 4

### 접근

##### - HTML로 외관을 만들어 준 후 quaryselector를 통해 js를 적용할 부분을 설정해 준다.

now Date()로 크리스마스 날짜 설정과 현재시간을 불러온다.
그 후 두 시간을 뺀 값을 queryselector한 부분에 적용시켜주고 setInterval()을 통해 함수를 실행시켜 실시간으로 변하는 시계를 완성한다.

### 핵심문법

- .querySelector(), .innerText

- setInterval(함수, 지연시간)

- new Date() : 실시간 불러오기 , new Date("2022-12-25") : 시간변수 설정하기

- Math.floor() : ()안에 숫자데이터의 소수점 덜어내어 내림차순
