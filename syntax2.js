//
/*
    var 키워드의 문제
    1. 호이스팅 => js 변수 선언 부분을 런타이 이전에 위로 끌어올림
        => 변수 선언 이전에 선언(참조)하면 undefined가 출력 (암묵적 할당)
    2. 중복 선언 가능
        => 중복 선언 시 오류 발생이 없기 때문에 런타임(실행) 문제가 발생할 수 있다
    3. 스코프 (유효범위)
        => var 키워드는 함수 레벨 스코프만 지원, 블록 레벨은 지원하지 않음

*/

//블록 레벨 스코프는 지원 x
{
  var num = 1000;
}

console.log(num); // num 값이 undefined일것으로 예상하지만, 출력이 됨 ( 오류 발생 가능성 o)

//함수 레벨 스코프는 지원
function test() {
  var num = 10;
  console.log(num);
}

test();

/*
  //let 실행 시
  => 선언 이전에 참조시 오류 발생
      console.log(index);
      let index = 0; // 오류 발생 : 호이스팅은 발생 하지만 초기화가 먼저 되지 않으면 선언되지 않음 (var는 선언 되어버림)
  */

/* 블록레벨 스코프 지원 */

let scope = "123";
{
  let scope = "12345";
}

console.log(scope); //123이 출력

// const  => constant의 줄임말로 상수(변하지 않는 수 )라는 뜻
// 보통 const는 대문자로 선언함. 그리고 선언과 초기화를 동시에 해야함.

/*
      const CONCON = 3.14;
      CONCON = 1234; // 재할당이 되지 않고 오류 발생
      const NUM; //값을 넣지 않았기 때문에 오류 발생, 선언을 하려면 let을 사용해야 함
  */

//화살표 함수

//기존 function 선언은 호이스팅이 발생
add(2, 1);
function add(a, b) {
  return a + b;
}

//화살표함수는 (매개변수) => {코드블럭}의 형태로 작성
/*
      1. 선언 이전 사용 불가
      2. return 생략 가능 => 콜백 함수로 많이 사용됨
      3. this 바인딩 x    
  */

const sub = (a, b) => {
  return a - b;
};

sub(2, 1);

//화살표 함수는 리턴 생략 가능
const sub2 = (a, b) => a - b;

console.log(sub2(2, 1));

//곱하기 함수 화살표 함수로 작성해보기 => return 생략해서 작성 =>
const sub3 = (a, b) => a * b;

console.log(sub3(4, 1));

//비구조화 할당 (디스스트럭처링)
let obj = {
  username: "john",
  age: 30,
  greeting: function () {
    console.log("hello");
  },
};

//배열 비구조화 할당
let arr = [10, (a, b) => a + b];

let [name1, func1] = arr;

console.log(name1); //10
console.log(func1(5, 2)); //7

//스프레드문법(펼침문법..)
// ...배열 = 배열의 각 원소를 펼치는 효과...
let arr02 = [1, 2, 3, 4, 5]; // ...arr02 = 1,2,3,4,5

console.log(arr02); // [1, 2, 3, 4, 5]
console.log(1, 2, 3, 4, 5); // 1 2 3 4 5
console.log(...arr02); // 1 2 3 4 5  => 불변성(원본값)을 지키면서 배열을 복사..

//객체 스프레드

let copy = { ...obj };
console.log(copy);

let originCopy = obj; // 이렇게 하면 원본 obj의 age까지 바뀜
originCopy.age = 40;

console.log(obj);

//복사 후 덮어쓰기
let spreadCopy = { ...obj, age: 40 }; // obj를 복사 후 age 값을 40으로 덮어쓰기 함
console.log(spreadCopy);

//promise : setTimeout이 대표적인 예
//처리 결과를 기다리지 않고 다음 코드를 바로 실행.

//비동기 예
setTimeout(() => {
  console.log("go");
}, 2000);

// function getData() {
//   //서버에서 데이터를 받아온다고 가정

//   let data;
//   setTimeout(() => {
//     data = 2;
//   }, 2000);

//   return data;
// }

// let data = getData();
// console.log(data); // undefined => setTimeout은 비동기라서 그걸 기다리지 않고 let data가 바로 data로 리턴되어서 값이 undefined

function getData(callback) {
  //서버에서 데이터를 받아온다고 가정
  setTimeout(() => {
    // callback([1, 2, 3]);
    callback(double(arr));
  }, 2000);
}

// function double(arr) {
//   return arr.map((item) => item * 2);
// }

// function render(arr) {
//   arr.forEach((item) => {
//     console.log("출력", item);
//   });
// }

// function double(arr) {
//   return arr.map((item) => item * 2);
// }

let render = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);

    reject("에러");
  }, 2000);
});

// getData(render);

//Promise : 비동기처리를 기다렸다가 실행 => 비동기를 동기처럼 실행

let numm = 78;

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(numm + 1);

    reject("에러");
  }, 2000);
});

promise
  .then((res) => {
    console.log(res); // 성공했을 때 값 반환
  })
  .catch((err) => {
    throw new Error(err); // 실패했을 때 값 반환
  });

function renderr(numm) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numm + 1);
    }, 2000);
  });
}

//async/await : 프로미스 앞에 await 프로미스가 resolve 될때까지 기다린 후에 다음 코드를 실행
async function concon(numm) {
  // numm= 12
  let result = await renderr(numm); //12+1
  result = await renderr(result); //13+1
  console.log(result); // concon(12) = 14
}

concon(12);

//async함수는 return 값을 resolve하는 Promise를 반환
// => return값을 반환하지 않음(promise를 반환함. return 값을 받고싶으면 .then 찍어야함)
