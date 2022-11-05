import styled from "styled-components";
import InputBox from "../../movie/InputBox";
import { BiLogIn } from "react-icons/bi";
import Button from "../../common/Button";
import { useState } from "react";
import FormBox from "./FormBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, password } = inputs;

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onSignIn = async (e) => {
    e.preventDefault();

    try {
      let result = await axios.post("http://101.101.218.43/users/login", {
        email,
        password,
      });

      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <FormBox onSubmit={onSignIn}>
      <h3>Login</h3>
      <InputWrapper>
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
      </InputWrapper>
      <Button text="Sigh In" />
      <Button
        text="Sign Up"
        bgColor="#aaa"
        onClick={() => navigate("/signUp")}
      />
    </FormBox>
  );
}

const InputWrapper = styled.div`
  margin-bottom: 20px;
`;

export default Login;