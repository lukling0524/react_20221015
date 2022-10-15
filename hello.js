let str = "hello";

export default str;
// export "delault"의 경우 import 할 때 이름 변경 자유롭게 가능
//export default는 파일당 한개만 가능하기 때문.

export function greeting() {
  console.log(str);
}

// export function (name)의 경우 import 시 function name 그대로 넣어야 함
