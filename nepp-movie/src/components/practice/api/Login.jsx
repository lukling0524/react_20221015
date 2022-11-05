import styled from "styled-components";
import InputBox from "../../movie/InputBox";
import { BiLogIn } from "react-icons/bi";
import Button from "../../common/Button";
import { useState } from "react";

function Login() {
  const [inputs, SetInputs] = useState({
    email: "",
    password: "",
  });

  return (
    <LoginFormBox>
      <LoginForm>
        <h3>Login</h3>
        <InputWrapper>
          <InputBox type="email" placeholder="이메일을 입력하세요">
            <BiLogIn />
          </InputBox>
          <InputBox
            type="password"
            placeholder="비밀번호를 입력하세요 (4~6자)"
          ></InputBox>
        </InputWrapper>
        <Button text="Sigh In"></Button>
        <Button text="Sign Up" bgColor="#aaa"></Button>
      </LoginForm>
    </LoginFormBox>
  );
}

const LoginFormBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  h3 {
    margin-bottom: 40px;
    font-size: 20px;
  }
`;

const LoginForm = styled.form`
  width: 300px;
  padding: 50px 20px;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 4px;
`;

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export default Login;
