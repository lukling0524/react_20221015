import { useRef, useState } from "react";
import AddUser from "./AddUser";

function UserList() {
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

  //   const jsxList = userList.map((user) => (
  //     <li>
  //       {user.name}({user.age}세)
  //     </li>
  //   ));

  //변수에 담지 않고 직접 삽입도 가능
  // <ul>
  //   userList.map((user) => (
  //   <li>
  //     {user.name}({user.age}세)
  //   </li>
  //   ))
  // </ul>;

  //변수에 담기
  //   <ul>{jsxList}</ul>

  //useRef로 값을 관리하면 값이 변경되어도 리렌더링이 일어나지 않는다
  //  => 특정 값을 기억해놓고 변경할 때 사용 (렌더링과 상관없이 변경 가능한 값)
  const nextId = useRef(4);

  const onCreate = (inputs) => {
    const { name, age } = inputs;
    // setUserList([
    //   ...userList,
    //   {
    //     id: nextId.current,
    //     name,
    //     age,
    //   },
    // ]);

    setUserList(
      //Array.prototype.concat : 인자로 전달된 배열 혹은 원소를 합쳐서 새로운 배열 반환
      userList.concat({
        id: nextId.current,
        name,
        age,
      })
    );

    nextId.current++;
  };

  const onRemove = (id) => {
    const confirmMsg = window.confirm("삭제하시겠습니까?");

    if (confirmMsg) {
      //업데이트를 위해 setUserList 무조건 사용
      setUserList(userList.filter((user) => user.id !== id));
      console.log(id);
    }
  };

  const onToggle = (id) => {
    setUserList(
      userList.map(
        (user) => (user.id === id ? { ...user, active: !user.active } : user)

        // if (user.id === id)
        //   return {
        //     ...user,
        //     active: !user.active,
        //   };
        // else return user;
      )
    );
  };

  return (
    <div>
      <AddUser onCreate={onCreate} />
      <h2>유저목록</h2>
      <ul>
        {userList.map((user) => (
          //props 통해서 User 컴포넌트값 전달받아 반영하기
          <User
            key={user.id}
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}

//({중괄호안에 비구조할당 만들어서 코드 줄이기})
function User({ user, onRemove, onToggle }) {
  const { name, age, id, active } = user;
  return (
    <li>
      <span
        style={{ color: active && "blue", cursor: "pointer" }}
        onClick={() => onToggle(id)}
      >
        {name}({age}세)
      </span>
      <button onClick={() => onRemove(id)} style={{ cursor: "pointer" }}>
        삭제
      </button>
    </li>
  );
}
export default UserList;
