import { useReducer } from "react";

const TODO_TYPE = {
  CREATE_TODO: "CREATE_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  REMOVE_TODO: "REMOVE_TODO",
};

const initialTodoState = [
  {
    id: 1,
    text: "todo 컴포넌트 만들기",
    done: true,
  },
  {
    id: 2,
    text: "todo 기능 구현하기",
    done: false,
  },
  {
    id: 3,
    text: "todo 리팩토링 하기",
    done: false,
  },
];

function reducer(state, action) {
  switch (action.type) {
    case TODO_TYPE.CREATE_TODO:
      return state.concat({
        id: action.id,
        text: action.text,
        done: false,
      });

    case TODO_TYPE.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    case TODO_TYPE.REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    default:
      return state;
  }
}

function useTodoReducer() {
  const [todos, dispatch] = useReducer(reducer, initialTodoState);

  return [todos, dispatch];
}

export default useTodoReducer;
