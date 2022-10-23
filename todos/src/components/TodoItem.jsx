import styled from "styled-components";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

function TodoItem() {
  return (
    <ItemBlock>
      <AiFillCheckCircle color="#505074" />
      <TodoText>디자인 만들기</TodoText>
      <AiFillDelete
        onMouseOver={({ target }) => (target.style.color = "#b51d1d")}
        onMouseOut={({ target }) => (target.style.color = "#333")}
      ></AiFillDelete>
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #d1d1d1;
`;

const TodoText = styled.p`
  flex: 1;
  margin-left: 8px;
  font-size: 0.9rem;
`;

export default TodoItem;
