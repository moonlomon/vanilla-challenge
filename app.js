const age = prompt("당신의 나이는?");

if (isNaN(age)) {
  console.log("나이를 입력해주세요");
} else {
  console.log("당신의 나이는 " + age + " 입니다.");
}
