import { useState, useRef } from "react";

//multiple input 하나의 객체로 관리
function InputText() {
  //setInputs에 변경이 생기면 전체 InputText함수에 변경이 일어남,,,,
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
  });

  //상태값 비구조화 할당
  const { userName, email } = inputs;

  //ref: 특정 DOM에 직접 접근할 때 사용
  // => useRef() 호출하면 객체를 반환
  const ref = useRef(null);

  const handleInput = (e) => {
    //e.target을 비구조화 할당으로
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onRemove = () => {
    setInputs({
      userName: "",
      email: "",
    });

    //ref의 값은 current에 들어감
    ref.current.focus();
  };

  //버튼을 눌러서 한번에 인풋 value와 이름 우측 출력되는 username 삭제
  return (
    <>
      <div>
        이름: {userName} ({email})
      </div>
      <input
        type="text"
        onChange={handleInput}
        value={inputs.userName}
        name="userName"
        ref={ref}
      />
      <input type="text" onChange={handleInput} value={email} name="email" />
      <button onClick={onRemove}>삭제</button>
    </>
  );
}

export default InputText;
