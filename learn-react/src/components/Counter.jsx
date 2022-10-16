import { useState } from "react";
//useState : 상태관리 hook => 상태 변화가 있을 때 재렌더링 발생

function Counter() {
  //배열 비구조할당
  //보통 앞에 넣은 객체(count)에 set-을 붙임 (함수)
  //매개변수로 초기값 - 여기서는 0
  const [count, setCount] = useState(0);

  const increaseNum = () => {
    //함수형 업데이트 : set함수의 인자로 콜백함수를 넣으면 콜백함수의 첫번째 인자로 최신상태값을 전달한다 (closer개념)
    //기억하는 값이 없으면 초기값, 있으면 최신값...
    setCount((num) => num + 1);

    //setCount(count + 10);
  };

  const decreaseNum = () => {
    setCount(count + 1);
  };

  //리턴 아래 부분은 UI단이기 때문에 최대한 코드가 간결한것이 좋음.. 함수같은거 밖으로 빼서 관리!
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
    </div>
  );
}

export default Counter;
