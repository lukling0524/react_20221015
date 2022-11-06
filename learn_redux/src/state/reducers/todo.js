const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

let nextId = 1;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextId++,
    text,
  };
};
export const removeTodo = (id) => ({ id, type: REMOVE_TODO });
export const toggleTodo = (id) => ({ id, type: TOGGLE_TODO });

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.id,
        text: action.text,
        done: false,
      });

    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
}
