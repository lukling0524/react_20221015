import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../state/reducers/todo";

function Todos() {
  const [input, setInput] = useState("");
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  //   console.log(todos);

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => dispatch(addTodo(input))}>등록</button>
      <ul>
        {todos.map((todo) => (
          <li style={{ color: todo.done && "blue" }}>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
