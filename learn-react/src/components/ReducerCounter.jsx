import { useReducer } from "react";

/* useReducer
    - 컴포넌트 외부에서 상태값 관리 가능
    -첫번째 인자로 리듀서 함수, 두번째 인자로 초기값 => 리듀서 함수의 반환값을 새로운 상태값으로 업데이트 한다
        =>[상태값, 디스패치 함수]를 반환
    - 리듀서 함수의 첫번째 인자는 최신 상태값, 두번째 인자로 dispatch 함수의 인자가 전달된다
        => switch문을 통해 case에 따라 새로운 상태값을 반환하는 형식을 작성한다

    액션으로 필요한 값을 불러옴
*/
function reducer(state, action) {
  //   console.log(state);
  //   return state + 1;
  console.log(action);
  switch (action.type) {
    case "INCREASE":
      return state + action.num; //액션 객체가 그대로 전달되므로 필요한 값을 불러와서 활용 가능
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}

function ReducerCounter() {
  const [count, dispatch] = useReducer(reducer, 0);
  console.log(count);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: "INCREASE", num: 10 })}>
        +1
      </button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-1</button>
    </div>
  );
}

export default ReducerCounter;
