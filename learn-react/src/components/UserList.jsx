import React, { useMemo } from "react";
// useMemo - 성능최적화
function countUser(arr) {
  console.log("counting....");
  // return arr.length;

  //active true인 함수만 count (배열함수 활용)
  return arr.filter((user) => user.active).length;
}

function UserList({ userList, onToggle, onRemove }) {
  // const usercount = countUser(userList);
  //의존하는 값이 변할때만 연산을 한다
  // const usercount = useMemo(() => countUser(userList), [userList]);

  console.log("UserList Render");

  return (
    <div>
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
export default React.memo(UserList); // react memo로 컴포넌트 감싸기
