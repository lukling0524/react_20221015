import styled, { keyframes } from "styled-components";
import { useRef, useState } from "react";
import { darken } from "polished";

function TodoInput({ dispatch }) {
  const [text, setText] = useState("");

  const [active, setActive] = useState(false);

  const handleText = (e) => setText(e.target.value);

  const onCreate = () => {
    if (!active) {
      setActive(true);
      return;
    } else {
      text === "" ? NoText() : WithText();

      function NoText() {
        alert("텍스트를 입력 하세요!!");
        return;
      }

      function WithText() {
        dispatch({ type: "CREATE_TODO", id: nextId.current, text });
        nextId.current++;
        setText("");
      }

      //   setActive(false);
    }
  };

  const nextId = useRef(4);

  return (
    //value값안에 넣어야 입력 후 텍스트가 빈 값으로 (setText의 ''값) 출력됨
    <Inputblock>
      {active && <input type="text" onChange={handleText} value={text} />}
      <BtnSubmit onClick={onCreate}>{active ? "Submit" : "Add"}</BtnSubmit>
    </Inputblock>
  );
}

// 자바스크립트가 아니라서 변수 hoisting 되지 않으므로 사용하기 전에 선언
const slideUp = keyframes`
    from{
        transform: translateY(20px);
    }
`;

const fadeIn = keyframes`
    from{opacity: 0;} 
`;

const Inputblock = styled.div`
  padding: 5px 10px;

  input {
    width: 100%;
    height: 40px;
    padding: 4px 8px;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
    animation: ${slideUp}, ${fadeIn}; //애니메니션 재사용성을 위해 한 keyframes안에 작성하는것이 아니고 나눠서 작성
    animation-duration: 0.6s;
  }
`;

const BtnSubmit = styled.button`
  position: relative;
  width: 100%;
  height: 40px;
  color: #fff;
  border: none;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => darken(0.15, theme.colors.main)};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.active};
  }
`;

export default TodoInput;
