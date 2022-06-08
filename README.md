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
