const age = prompt("당신의 나이는?");

if (isNaN(age)) {
  console.log("나이를 입력해주세요");
} else if (age < 20 || age >= 100) {
  console.log("술은 어른되고 젊을 때 마시는거에요");
} else if (age >= 20 && age < 100) {
  console.log("즐술");
}
