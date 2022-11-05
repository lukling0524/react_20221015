import styled from "styled-components";
import InputBox from "../../movie/InputBox";
import { BiLogIn } from "react-icons/bi";
import Button from "../../common/Button";
import { useEffect, useState } from "react";
import FormBox from "./FormBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";

function Login() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [cookies, setCookie, removeCookie] = useCookies(["access-token"]);

  // 토큰을 가지고 있는지 확인
  useEffect(() => {
    // removeCookie(
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiI2MzY1ZDk0YzViYjU0NmFkOGZhYmIzNGYiLCJpYXQiOjE2Njc2MTk5OTYsImV4cCI6MTY5OTE3NzU5Nn0.Rzbxc0EPnMXl7FxP_xWRB1ijvbVL6Dq76zXXzcQ0NQo"
    // );

    if (cookies["access-token"]) {
      navigate("/post");
    }
  }, [cookies, navigate]);

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
      setCookie("access-token", result.data.data.token, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        // httpOnly: true,
      });
      navigate("/post");

      console.log(result.data.data.token);
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
