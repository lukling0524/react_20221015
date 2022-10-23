import styled from "styled-components";
import TodoItem from "./TodoItem";

function TodoList({ todos, dispatch }) {
  return (
    <ListBlock>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </ListBlock>
  );
}

const ListBlock = styled.ul`
  flex: 1;
  overflow-y: auto;
`;

export default TodoList;
