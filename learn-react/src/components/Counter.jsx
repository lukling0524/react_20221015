import { useState, useEffect } from "react";
//useState : 상태관리 hook => 상태 변화가 있을 때 재렌더링 발생

function Counter() {
  //배열 비구조할당
  //보통 앞에 넣은 객체(count)에 set-을 붙임 (set함수)
  //매개변수로 초기값 - 여기서는 0
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increaseNum = () => {
    //함수형 업데이트 : set함수의 인자로 콜백함수를 넣으면 콜백함수의 첫번째 인자로 최신상태값을 전달한다 (closer개념)
    //기억하는 값이 없으면 초기값, 있으면 최신값...
    setCount((num) => num + 1);

    //setCount(count + 10);
  };

  const decreaseNum = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    // componentDidMount, componentDidUpdate와 동일하게 동작한다
    console.log("update");
    // document.title = `coutn : ${count}`;
  });

  useEffect(() => {
    // 빈 배열 [](디펜더시)을 넣으면 맨 처음 mount시에만 실행 = componentDidMount와 동일하게 동작
    console.log("did mount!");
  }, []);

  useEffect(() => {
    // componentWillUnMount와 동일하게 동작
    return () => {
      console.log("did unmount!!!");
    };
  }, []);

  useEffect(() => {
    // useEffect의 두번째 인자로 [] 의존성을 전달한다 => []배열안의 값이 변경 되었을때만 실행된다
    document.title = `coutn : ${count}`;
  }, [count]);
  //이렇게 사용하면 count가 바뀔때만 title을 변경한다 (성능관리용)

  //리턴 아래 부분은 UI단이기 때문에 최대한 코드가 간결한것이 좋음.. 함수같은거 밖으로 빼서 관리!
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <h2>
        {input} : {count}
      </h2>
      <button onClick={increaseNum}>+1</button>
      <button onClick={decreaseNum}>-1</button>
    </div>
  );
}

export default Counter;
