import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";
import { Emoji, Motion, RedButton } from "../common/buttons";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import styled from "styled-components";
import axios from "axios";
import { postSignIn } from "../../api";
function SigninForm() {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirm: "",
    });

    const { username, email, password, confirm } = inputs;
    const [isEmpty, setIsEmpty] = useState(true);
    const disabled = isEmpty || password !== confirm;
    const navigate = useNavigate();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    useEffect(() => {
        for (let value of Object.values(inputs)) {
            if (value.length < 1) {
                setIsEmpty(true);
                return;
            }
        }

        setIsEmpty(false);
    }, [inputs, isEmpty]);

    const handleSubmit = (e) => {
        e.preventDefault();

        postSignIn(username, email, password).then((res) => {
            alert("Welcome to join us 😘");
            navigate("/accounts/login");
        });
    };

    return (
        <>
            <BackIcon>
                <Link to="/accounts/login">
                    <IoMdArrowRoundBack size="24" />
                </Link>
            </BackIcon>
            <Title title="Sign in" />
            <Form margin="20px 0" onSubmit={handleSubmit}>
                <Input
                    placeholder="your name 🍕"
                    name={"username"}
                    onChange={handleInput}
                />
                <Input
                    placeholder="email 🍔"
                    name={"email"}
                    onChange={handleInput}
                />
                <Input
                    placeholder="password 🍟"
                    name={"password"}
                    onChange={handleInput}
                />
                <Input
                    placeholder="confirm password 🥨"
                    name={"confirm"}
                    onChange={handleInput}
                />
                <RedButton disabled={disabled} style={{ marginTop: "30px" }}>
                    Sign in {!disabled ? <Emoji>🙌</Emoji> : <span>👀</span>}
                </RedButton>
            </Form>
        </>
    );
}

const BackIcon = styled.div`
    position: absolute;
    top: 30px;
    left: 20px;
`;

export default SigninForm;
