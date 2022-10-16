//이 파일명을 js 확장자로 바꾸어도 오류가 나지 않지만, 컴포넌트라는걸 명시하기 위해 jsx 확장자로 사용.

import React from "react";

// 함수형 컴포넌트 (보통 파일명과 컴포넌트를 같게 지음, 반드시 PascalCase로 파일명 작성)

//매개변수에도 비구조할당을 사용할 수 있다 -> 코드 간소화 할 수 있음
//조건부 랜더링 가능, 조건부 랜더일때는 &&를 자주 사용 / 앞이 true일 때 뒤의 값을 랜더링, jsx상에서는 태그 자체 출력도 가능 (active값이 true인 경우만 * 출력)

//props 활용의 예
function MyComponent({ active, title }) {
  return (
    <div style={{ color: active && "red" }}>
      {/* active가 true일 때 color red 출력 예시 ▲▲▲*/}
      {active && <b>***</b>}Hello {title}
    </div>
  );
}

//title에 아무 값도 없을 때 보여지는 값
MyComponent.defaultProps = {
  title: "empty!!!!!!!!!!!!",
  color: "green",
};

export default MyComponent;
