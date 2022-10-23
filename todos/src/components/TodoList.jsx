import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList() {
  return (
    <ListBlock>
      <TodoItem></TodoItem>
    </ListBlock>
  );
}

const ListBlock = styled.ul`
  flex: 1;
  overflow-y: auto;
`;

export default TodoList;
