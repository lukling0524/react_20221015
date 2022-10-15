//삼항연산자
//조건 ? 값1 : 값2 => 조건이 참이면 값1이 반환, 거짓이면 값2가 반환

let num04 = 4;
let isEven;

if (num04 % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}

let isOdd = num04 % 2 === 0 ? true : false;

// console.log(isOdd); //true

//단축평가 :  &&, || 를 사용
//피연산자 1 && 피연산자 2 => 피연산자1이 trythy한 값이 면 피연산자 2, falsy한 값이라면 피연산자 1 반환

/*
  let color = true && "red";
  console.log(color); // red를 반환

  let color = false && "red";
  console.log(color); // false를 반환

  let color = undefined && "red";
  console.log(color); // undefined를 반환

  let color = null && "red";
  console.log(color); // null 반환

  //피연산자 1 || 피연산자 2 => 피연산자1이 trythy한 값이 면 피연산자 1, falsy한 값이라면 피연산자 2 반환

  let text = undefined || "문자";
  console.log(text); // 문자 반환

  let text = "글자" || "문자";
  console.log(text); // 글자 반환


뒤에 함수가 들어갈 경우, 앞의 값에 따라 뒤에 함수를 실행하거나 실행시키지 않을 수 있다.

*/

// let isRed = true;
// function Nepp() {
//   console.log("실행");
//   // return 1;
// }

// let color = isRed || Nepp;

// console.log(text); // 문자 반환

/*================================================================================================================================= */

// let data = undefined;
// let data = 123;
// let text = data || "데이터 없음";

// console.log(text); //data에 데이터 값이 들어가면 그 값을 출력, data가 undefined면 데이터없음 출력

// //null 병합 연산자 : 참조 값이 null 혹은 undefined면 ??뒤의 값을 할당
// let text02 = 0 ?? "데이터 없음";
// console.log(text02);

// //옵셔널 체이닝 : 참조 값이 null 혹은 undefined면 참조하지 않는다.
// let user = {
//   age: 30,
//   height: 123,
// };

// console.log(user.weight?.height);
/*=================================================================================================================================
=================================================================================================================================
================================================================================================================================= */

//forEach, map, filter
let arr04 = [1, 2, 3, 4];

//forEach : 각 원소에 대해서 콜백함수 실행 = > 반환값 없음
let arrResult = arr04.forEach((num) => {
  console.log(num);
});
console.log(arrResult); // undefined

//map : 각 원소에 대한 콜백함수의 리턴값을 모은 새로운 배열을 반환
let mapArr = arr04.map((num) => num * 2);
console.log(mapArr); // [ 2, 4, 6, 8 ]

// filter : 각 원소에 대한 콜백함수의 조건에 부압하는 원소만 새로운 배열로 모아서 반환
//  => 콜백함수의 return 값이 true인 경우의 원소만 모은다
let filterArr = arr04.filter(function (num) {
  return num > 2; // 반환값은 true or false, 그 중 true인 값만 반환함
});

console.log(filterArr); // [ 3, 4 ]

let filterArr2 = arr04.filter((num) => num > 2); // 위의 필터함수를 화살표 함수로 바꾼것
console.log(filterArr2);

console.log("===============");
//usetArr의 원소 중 나이가 30이상인 사람의 이름과 나이를 하나의 문자열로 만들어서 새로운 배열 만들기

let userArr = [
  { username: "mark", age: 30 },
  { username: "john", age: 29 },
  { username: "amy", age: 40 },
];

// let filterUser = userArr.filter((user) => user.age >= 30);
// console.log(filterUser);

// //템플릿 리터럴 : 문자열 안에 변수값을 포함시킬 수 있다 => `(백틱)`안에 ${변수} 사용  ==> `그냥 문자열과 ${변수}`
// let mapUser = filterUser.map((user) => `${user.username} : ${user.age}`);

// console.log(mapUser);

// 메서드체이닝을 이용하여 filter값에 map을 붙여서 사용할 수 있다. (filter의 실행결과 값이 결국 배열이기 때문..)
let filterUser = userArr
  .filter((user) => user.age >= 30)
  .map((user) => `${user.username} : ${user.age}`);

console.log(filterUser);

/*================================================================================================================================= */

//표현식 => 값으로 평가될 수 있는 식 (최종 실행결과)
//문 => 프로그래밍을 실행하는 최소 단위
let numm = 1 + 1; //값이 2 이므로 표현식

/*================================================================================================================================= */

//rest 문법 : 매개변수 앞에  ...을 붙이면 매개변수의 개수와 상관없이 배열로 모은다 => 매개변수의 마지막에 와야한다
function getTotal(...arr) {
  let result = 0;
  arr.forEach((num) => (result += num));

  console.log(result); //6
}

getTotal(1, 2, 3);

function getTotal2(a, ...arr) {
  console.log(arr); //[ '입니다', '!' ]
}

getTotal2("문자열", "입니다", "!");
