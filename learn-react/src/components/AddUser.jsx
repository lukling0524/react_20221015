import { useState } from "react";

function AddUser({ onCreate }) {
  const [inputs, setInputs] = useState({
    name: "",
    age: "",
  });

  //input value 불러오기
  const handleInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  //등록과 동시에 인풋 value 지우기
  const onClickSubmit = (e) => {
    e.preventDefault();
    onCreate(inputs);
    setInputs({
      name: "",
      age: "",
    });
  };

  //   const onClickRemove = (id) => {
  //     onRemove(id);
  //   };

  //form tag로 바꾸면 엔터로도 저장 가능한데 대신 새로고침이 되므로 onClickSubmit에 preventDefault를 걸어줌 (새고 방지)
  return (
    <form onSubmit={onClickSubmit}>
      <input
        type="text"
        onChange={handleInput}
        name="name"
        value={inputs.name}
      />
      <input
        type="number"
        onChange={handleInput}
        name="age"
        value={inputs.age}
      />
      <button>등록</button>
    </form>
  );
}

export default AddUser;
