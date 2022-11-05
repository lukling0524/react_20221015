import styled from "styled-components";
import { BiLogIn } from "react-icons/bi";
import Button from "../../common/Button";
import InputBox from "../../movie/InputBox";
import { useState } from "react";
import FormBox from "./FormBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = inputs;

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSignUp = async (e) => {
    e.preventDefault();

    for (const value of Object.values(inputs)) {
      if (value.length <= 0) {
        alert("모든 항목을 입력해주세요");
        return;
      }
    }

    if (password !== confirmPassword) {
      alert("비밀번호를 확인해주세요");
      return;
    }
    try {
      let result = await axios.post("http://101.101.218.43/users", {
        name,
        email,
        password,
      });

      alert("회원가입이 완료되었습니다");
      navigate("/login");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormBox onSubmit={onSignUp}>
      <h3>Sign Up</h3>
      <InputWrapper>
        <InputBox
          type="text"
          placeholder="이름을 입력하세요"
          name="name"
          onChange={handleInput}
        ></InputBox>
        <InputBox
          type="email"
          placeholder="이메일을 입력하세요"
          name="email"
          onChange={handleInput}
        >
          <BiLogIn />
        </InputBox>
        <InputBox
          type="password"
          placeholder="비밀번호를 입력하세요 (4~6자)"
          name="password"
          onChange={handleInput}
        />
        <InputBox
          type="password"
          placeholder="비밀번호를 확인해주세요"
          name="confirmPassword"
          onChange={handleInput}
        />
      </InputWrapper>

      <Button text="Sign Up" bgColor="#aaa" />
      <Button text="Back" bgColor="red" onClick={() => navigate("/login")} />
    </FormBox>
  );
}

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export default SignUp;
