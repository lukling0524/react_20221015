import styled, { css, keyframes } from "styled-components";
//css 사용시 반드시 import....
import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiFillDelete,
} from "react-icons/ai";
import { useState } from "react";

function TodoItem({ todo, dispatch }) {
  const { id, text, done } = todo;
  const [remove, setRemove] = useState(false);

  const onToggle = () => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const onRemove = () => {
    setRemove(true);
    setTimeout(() => {
      dispatch({ type: "REMOVE_TODO", id });
    }, 600);
  };

  return (
    <ItemBlock remove={remove}>
      <CheckBox onClick={onToggle}>
        {done ? <AiFillCheckCircle /> : <AiOutlineCheckCircle />}
        <TodoText done={done}>{text}</TodoText>
      </CheckBox>
      <AiFillDelete
        onMouseOver={({ target }) => (target.style.color = "#b51d1d")}
        onMouseOut={({ target }) => (target.style.color = "#333")}
        onClick={onRemove}
      ></AiFillDelete>
    </ItemBlock>
  );
}

const slideOut = keyframes`
    to{
        transform: translateX(-100%);
    }
`;

const ItemBlock = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #d1d1d1;

  ${({ remove }) =>
    remove &&
    css`
      animation: ${slideOut} 0.4s;
      animation-fill-mode: both;
    `}
`;

const CheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.main};
  cursor: pointer;
`;

const TodoText = styled.p`
  flex: 1;
  margin-left: 8px;
  font-size: 0.9rem;
  color: #333;
  transition: opacity 0.15s;

  ${({ done }) =>
    done &&
    css`
      color: #999;
      text-decoration: line-through;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

export default TodoItem;
