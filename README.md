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

### function이란?

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

### function을 object에 넣어 쓰기

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

### function의 사용공식 - fuction과 retrun

- function기능의 통용된 사용법은 return을 포함한 함수식을 통해 나온 값을 활용하는 것이다.
- calculator라는 object 안에 각각 add함수와 min함수를 적용한 경우다.

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

![1](https://user-images.githubusercontent.com/103993019/172554591-cc0f085c-eb9c-4564-afed-eda3d05d299a.PNG)

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

![2](https://user-images.githubusercontent.com/103993019/172554599-b32cfe76-b7df-40aa-b4d6-b66a290cc031.PNG)

### 출력된 function값을 연달아 사용 할 경우

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

### prompt란?

- prompt를 사용하면 사용자가 직접 입력한 값을 코딩에 써먹을 수 있다.

```javascript
const age = prompt("How old are you?");

console.log(age);
```

![1](https://user-images.githubusercontent.com/103993019/172561270-4ec23bb9-354f-461a-ae2a-05afe41337a5.PNG)
![2](https://user-images.githubusercontent.com/103993019/172561274-178e2f6e-710c-4bca-b3ea-9f0b96d4332f.PNG)

### prompt의 특징과 typeoff

- prompt의 입력된 값들은 전부 string(문자)으로 인식하게 된다. 데이터의 타입을 확인인하는 방법은 typeoff를 앞에 붙히면 된다.

```javascript
const age = prompt("How old are you?");

console.log(typeof age);
```

![3](https://user-images.githubusercontent.com/103993019/172561282-cf18a7b0-6e77-4b0c-8117-fc9c966b57c7.PNG)
![4](https://user-images.githubusercontent.com/103993019/172561259-7a0adb07-fb7c-4e3d-b03d-db653a3e9a3e.PNG)

### 문자열을 숫자열(자연수)로! parseInt()

- palseInt내장함수를 이용하면 데이터를 integer(자연수)의 형태로 변환한 수 있다. "감자"처럼 애초에 숫자조차 없는 데이터는 typeof 없이 parseInt과정에서 NaN(숫자아님)으로 출력된다. 참고로 NaN은 Number이다.

```javascript
const age = prompt("How old are you?");

console.log(typeof parseInt(age));
```

![5](https://user-images.githubusercontent.com/103993019/172561261-16e6dee2-6002-47b6-8fd3-ddbb3c30a462.PNG)
![6](https://user-images.githubusercontent.com/103993019/172561264-13f4fe74-7616-42f9-ade8-11783c8540c2.PNG)

```javascript
const age = prompt("How old are you?");

console.log(parseInt(age));
```

![7](https://user-images.githubusercontent.com/103993019/172561267-c3ddaf15-ea17-4fe5-a7eb-4592d2b74201.PNG)
![8](https://user-images.githubusercontent.com/103993019/172561269-2e557c05-7db1-4fe0-ac4e-fb1bd26eb33f.PNG)

## #2.14 ~ 2.16

### 내장함수 isNaN()

- isNaN 내장함수는 입력된 데이터가 string이면 true를 아니면 false를 반환한다.
  "1", "감자"처럼 묶인 경우에는 전부 string으로 인식하지 않고 따옴표를 벗겨낸 데이터 값을 확인한다.

```javascript
console.log(isNaN(123));
console.log(isNaN("123"));
console.log(isNaN("감자"));
```

![1](https://user-images.githubusercontent.com/103993019/172572672-5eb26de1-7de9-44e3-918a-fbaf30c82117.PNG)

### 조건문 if() elseif() else

- if(){~~~~} 에서 ()안의 값이 true일 경우 {}안에 코드가 실행된다.
  if()가 true가 아닐경우 코드를 실행하지 않거나 else{~~~} 혹은 elseif(){~~~}에 있는 코드로 넘어가 실행된다.

```javascript
const age = prompt("당신의 나이는?");

if (isNaN(age)) {
  console.log("나이를 입력해주세요");
} else {
  console.log("당신의 나이는 " + age + " 입니다.");
}
```

![2](https://user-images.githubusercontent.com/103993019/172572682-d1a367d2-3725-4158-889f-bbf29c44baf1.PNG)
![3](https://user-images.githubusercontent.com/103993019/172572686-8c67ffa1-26c9-4ef2-b921-2f7ce7a55b02.PNG)
![4](https://user-images.githubusercontent.com/103993019/172572705-13782aac-e31b-4fc9-9736-ffd3a7ff9b91.PNG)
![5](https://user-images.githubusercontent.com/103993019/172572707-5778097b-5c1d-41f4-bdf3-e3f11df20d50.PNG)

### &&(and)와 ||(or)

- true && true => true, true && false => false, false && false => false다. &&(and)는 둘 다 true일 때 true를 반환한다.

- true || true => true, true || false => true, false || false => false다. ||(or)는 둘 중 하나만 true이면 true를 반환한다.

```javascript
const age = prompt("당신의 나이는?");

if (isNaN(age)) {
  console.log("나이를 입력해주세요");
} else if (age < 20 || age >= 100) {
  console.log("술은 어른되고 젊을 때 마시는거에요");
} else if (age >= 20 && age < 100) {
  console.log("즐술");
}
```

![1](https://user-images.githubusercontent.com/103993019/172577843-9c31882b-5117-4682-9f60-dd87a38deb4b.PNG)
![2](https://user-images.githubusercontent.com/103993019/172577848-eb37a1bb-7de9-4085-9210-88048e060260.PNG)
![3](https://user-images.githubusercontent.com/103993019/172577850-946fb431-84d3-440d-8e73-aa1daaeb1c27.PNG)
![4](https://user-images.githubusercontent.com/103993019/172577858-b06b0809-3289-47c2-8bd4-ae366f38a6cf.PNG)

## 22.06.08. #3.0 ~ #3.2

### console에 document 호출하기

- 브라우저 console에 document를 호출하면 해당 브라우저랑 연결된 HTML을 보여준다.
  또한 console.dir(document)로 호출을 하면 HTML 내부의 속성들이 object(객체)의 형식으로 나열되어 보여진다.
  js에서 object의 요소들을 불러올 때 처럼 document.title을 써서 호출하면 정말로 HTML코드의 title property(요소)의 key(값)를 가져올 수 있고 값을 변환 할 수도 있다.
  물론 이는 브라우저의 console 뿐만 아니라 vsc의 js파일에서도 가능하다.

<!--document와 dir이미지-->
<!--document와 dir이미지-->
<!--title이미지-->
<!--vsc이미지-->

### element(속성) 불러오기

- console.dir()을 통해 객체형태로 document를 보면 수많은 요소들 중 getElementsById라는 것이 있다.
  이는 요소들 중 mothod값을 가지는 함수형태의 요소로 이를 이용하면 특정 id값을 가지는 HTML의 부분을 가져올 수 있다.
  이 때 이러한 HTML의 부분을 JS에서는 element(속성)라고 부른다.
  또한 title의 경우와 마찬가지로 VSC를 통한 JS조작을 통해 브라우저에서 보여지는 값을 변경할 수도 있다.

<!--getElementById-->
<!--h1처음이미지-->
<!--innertext-->
<!--변환-->

- 추가로 속성을 불러오는데는 getElementById 외에도 태그, class이름 등 불러오고 싶은 방식에 따라 getElementsByClassName, getElementsByTagName 등을 쓸 수 있고 css선택자 방식을 적극 사용할 경우 querySelector 혹은 querySelectorAll을 이용할 수 있다.

```javascript
const classes = document.getElementsByClassName("int");
const divs = document.getElementsByTagName("div");
const css1 = document.querySelector("div > h1");
const css2 = document.querySelectorAll("div");

console.log(classes);
console.log(divs);
console.log(css1);
console.log(css2);
```

<!--console 여러개-->
