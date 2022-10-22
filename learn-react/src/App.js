import { useCallback, useRef, useState } from "react";

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

//function이 하나의 컴포넌트가 됨
function App() {
  const [isRender, setIsRender] = useState(true);

  const [text, setText] = useState("");
  const [inputs, handleInput, reset] = useInputReducer({
    userName: "",
    age: 0,
  });
  const [userList, setUserList] = useState([
    {
      id: 1,
      name: "1번",
      age: 11,
      active: true,
    },
    {
      id: 2,
      name: "2번",
      age: 22,
      active: false,
    },
    {
      id: 3,
      name: "3번",
      age: 33,
      active: false,
    },
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback((inputs) => {
    const { name, age } = inputs;
    setUserList(
      // useCallback을 사용할 때 함수형 업데이트를 사용하면 의존성에서 제거할 수 있다. (성능최적화)
      (userList) => {
        return userList.concat({
          id: nextId.current,
          name,
          age,
        });
      }
    );
    nextId.current++;
  }, []);

  const onRemove = useCallback((id) => {
    const confirmMsg = window.confirm("삭제하시겠습니까?");

    if (confirmMsg) {
      //업데이트를 위해 setUserList 무조건 사용
      setUserList((userList) => userList.filter((user) => user.id !== id));

      console.log(`id 개수 : ${id}`);
    }
  }, []);

  const onToggle = useCallback((id) => {
    setUserList((userList) =>
      userList.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  return (
    <>
      <AddUser
        onCreate={onCreate}
        inputs={inputs}
        handleInput={handleInput}
        reset={reset}
      />
      <UserList userList={userList} onRemove={onRemove} onToggle={onToggle} />
      <input type="text" oncChange={(e) => setText(e.target.value)} />
      {/* <ReducerCounter /> */}
    </>
  );
}

export default App;
