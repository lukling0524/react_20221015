import {
  useCallback,
  useRef,
  useState,
  createContext,
  useReducer,
} from "react";

// import "./App.css";
import AddUser from "./components/AddUser";
// import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
// import MyComponent from "./components/MyComponent";
// import InputText from "./components/InputText";
import UserList from "./components/UserList";
import ReducerCounter from "./components/ReducerCounter";
import useInputs from "./hooks/useInputs";
import useInputReducer from "./hooks/useInputReducer";

export const UserDispatchContext = createContext(null);
export const UserStateContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER": {
      const { inputs, id } = action;
      return [...state, { ...inputs, id }];
    }
    case "REMOVE_USER": {
      const { id } = action;
      return state.filter((user) => user.id !== id);
    }
    case "TOGGLE_USER": {
      const { id } = action;
      return state.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      );
    }
    default:
      return state;
  }
}

const initialUserList = [
  {
    id: 1,
    name: "황보석",
    age: 30,
    active: true,
  },
  {
    id: 2,
    name: "김정철",
    age: 30,
    active: false,
  },
  {
    id: 3,
    name: "김관훈",
    age: 30,
    active: false,
  },
];

//function이 하나의 컴포넌트가 됨
function App() {
  const [isRender, setIsRender] = useState(true);

  const [text, setText] = useState("");

  const [inputs, handleInput, reset] = useInputReducer({
    name: "",
    age: 0,
  });

  const [userList, dispatch] = useReducer(reducer, initialUserList);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    dispatch(
      // Array.prototype.concat : 인자로 전달된 배열 혹은 원소를 합쳐서 새로운 배열 반환
      // useCallback을 사용할 때 함수형 업데이트를 사용하면 의존성에서 제거할 수 있다.
      { type: "CREATE_USER", inputs, id: nextId.current }
    );

    nextId.current++;
  }, [inputs]);

  const onRemove = useCallback((id) => {
    // window.confirm : 확인버튼 클릭시 true 반환
    const ok = window.confirm("정말 삭제하시겠습니까?");
    // if (ok)
    // setUserList((userList) => userList.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    // setUserList((userList) =>
    //   userList.map((user) =>
    //     user.id === id ? { ...user, active: !user.active } : user
    //   )
    // );
  }, []);

  return (
    <>
      <UserDispatchContext.Provider value={dispatch}>
        <UserStateContext.Provider val={userList}>
          <AddUser
            onCreate={onCreate}
            dispatch={dispatch}
            inputs={inputs}
            handleInput={handleInput}
            reset={reset}
          />
          <UserList
            userList={userList}
            onRemove={onRemove}
            onToggle={onToggle}
          />
          <input type="text" oncChange={(e) => setText(e.target.value)} />
          {/* <ReducerCounter /> */}
        </UserStateContext.Provider>
      </UserDispatchContext.Provider>
    </>
  );
}

export default App;
