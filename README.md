# Vanilla Challenge

Vanilla challenge start 22.06.06.

## 22.06.07. #2.1 ~ #2.6

- Number type data -> 2, 2.2 ... but in detail 2 = integer, 2.2 = float

- String type data -> "me", "1", "true" ..

- Var can not distinguish variable's roles. So created const(can't changed variable's value) and let(can changed variable's value)

- Boolean type data -> true, false

- null, undefined, Nan ... are not of any type

- Array -> arr = [1, "apple", true, 3.14] => datalist in a 'one' variable

- arr[0] = 1, arr[2] = true

- arr.push("me") => arr = [1, "apple", true, 3.14, "me"]

- Object -> obj = {name:"SJ", age:25, isfat:true} => save data with property

- obj.gender = male -> {name:"SJ", age:25, isfat:true, gender:male}

- obj.name or obj["name"] -> "SJ"

## 22.06.08. #2.7 ~ #2.8

- function은 하나의 코드 덩어리를 사용할 때 쓴다.

```javascript
function hey() {
  alert("hello!");
  console.log("nice to meet you");
}

hey();
```

- 위처럼 function을 만들어 준 후 function의 이름인 hey()만 입력해서 실행하면 funcion안에 alert와 console.log 코드들이 작동한다.

![1](https://user-images.githubusercontent.com/103993019/172543558-8ab10ad3-eeff-42d2-b83a-819beb087046.PNG)

- 또한 변수를 지정해주면 변수에 따른 여러 결과물들을 출력하는 덩어리를 만들어 줄 수 있다.

```javascript
function hello(a, b) {
  console.log("hello " + a + "i'm " + b);
}

hello("SJ", "JS");
hello("MJ", "JM");
```

- 위와 같이 코드를 입력후 실행하면 변수에 따른 console.log가 출력된다.

![2](https://user-images.githubusercontent.com/103993019/172543564-eac4299e-ce9a-43b5-a657-9d45d731d610.PNG)

- function은 object에 넣어 object의 요소를 뽑아 쓰는 것으로 기능을 할 수 있다.

```javascript
const obj = {
  name: "SJ",
  hello: function (a, b) {
    console.log(a + b);
  },
};

console.log(obj.name);
obj.hello(2, 4);
```

![3](https://user-images.githubusercontent.com/103993019/172543567-42b9610f-218b-4449-ab01-c19d45a57108.PNG)

## #2.9 ~ #2.12

- function기능의 통용된 사용법은 return을 포함한 함수식을 통해 나온 값을 활용하는 것이다.

```javascript
let number = 100;

const calculator = {
  add: function (a) {
    number = number + a;
    return "The anwser is " + number;
  },
  min: function (a) {
    number = number - a;
    return "The anwser is " + number;
  },
};

console.log("I have solved it! " + calculator.add(50));
```

```javascript
let number = 100;

const calculator = {
  add: function (a) {
    number = number + a;
    return "The anwser is " + number;
  },
  min: function (a) {
    number = number - a;
    return "The anwser is " + number;
  },
};

console.log("I have solved it! " + calculator.min(50));
```

- calculator라는 object 안에 각각 add함수와 min함수를 적용한 경우다.

![1](https://user-images.githubusercontent.com/103993019/172554591-cc0f085c-eb9c-4564-afed-eda3d05d299a.PNG)
![2](https://user-images.githubusercontent.com/103993019/172554599-b32cfe76-b7df-40aa-b4d6-b66a290cc031.PNG)

- 추가로 함수를 연달아 두번 출력 할 경우 add에서 쓰고 출력한 number 값이 사라지지 않기 때문에 add에서 계산 된 number가 그대로 min에 쓰이게 된다.

```javascript
let number = 100;

const calculator = {
  add: function (a) {
    number = number + a;
    return "The anwser is " + number;
  },
  min: function (a) {
    number = number - a;
    return "The anwser is " + number;
  },
};

console.log("I have solved it! " + calculator.add(50));
console.log("I have solved it! " + calculator.min(50));
```

![3](https://user-images.githubusercontent.com/103993019/172554601-ff7868a8-ca3b-4466-9aa8-c01dc3117bd3.PNG)

## #2.13

- prompt를 사용하면 사용자가 직접 입력한 값을 코딩에 써먹을 수 있다.

```javascript
const age = prompt("How old are you?");

console.log(age);
```

<!--prompt이미지-->
<!--콘솔이미지-->

- prompt의 입력된 값들은 전부 string(문자)으로 인식하게 된다. 데이터의 타입을 확인인하는 방법은 type off를 앞에 붙히면 된다.

```javascript
const age = prompt("How old are you?");

console.log(typeof age);
```

<!--prompt이미지-->
<!--콘솔이미지-->

- palseInt내장함수를 이용하면 데이터를 integer(자연수)의 형태로 변환한 수 있다. "감자"처럼 애초에 숫자조차 없는 데이터는 typeof 없이 parseInt과정에서 NaN(숫자아님)으로 출력된다. 참고로 NaN은 Number이다.

```javascript
const age = prompt("How old are you?");

console.log(typeof parseInt(age));
```

<!--프롬프트이미지-->
<!--콘솔이미지-->

```javascript
const age = prompt("How old are you?");

console.log(parseInt(age));
```

<!--프롬프트이미지-->
<!--콘솔이미지-->
