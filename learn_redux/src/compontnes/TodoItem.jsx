import { useDispatch } from "react-redux";
import styled from "styled-components";
import { removeTodo, toggleTodo } from "../state/reducers/todo";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <TodoBlock style={{ color: todo.done && "blue" }}>
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
      <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
    </TodoBlock>
  );
}

const TodoBlock = styled.div`
  list-style: none;
  padding: 10px 0;

  button {
    border: 0;
    outline: 0;
    background-color: 0;
  }
`;

export default TodoItem;
