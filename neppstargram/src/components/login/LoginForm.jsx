import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";
import { Button, Emoji, RedButton } from "../common/buttons";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { postlogin } from "../../api";

function LoginForm() {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const { email, password } = inputs;
    const navigate = useNavigate();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        postlogin(email, password).then(() => {
            alert("Welcome back 💖");
            navigate("/post");
        });
    };

    return (
        <>
            <Title title="login" />
            <Form margin="20px 0" onSubmit={handleSubmit}>
                <Input
                    placeholder="email 🥞"
                    name="email"
                    onChange={handleInput}
                />
                <Input
                    type="password"
                    placeholder="password 🍡"
                    name="password"
                    onChange={handleInput}
                />
                <div style={{ margin: "30px 0 14px" }}>
                    <Button style={{ marginBottom: "10px" }}>
                        Login <Emoji>🎈</Emoji>
                    </Button>
                    <Link to="/accounts/signin">
                        <RedButton>
                            Sign in <Emoji>✨</Emoji>
                        </RedButton>
                    </Link>
                </div>
            </Form>
        </>
    );
}

export default LoginForm;
