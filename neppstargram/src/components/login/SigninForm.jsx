import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";
import { RedButton } from "../common/buttons";
import { useEffect, useState } from "react";

function SigninForm() {
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        confirm: "",
    });

    const [isEmpty, setIsEmpty] = useState(true);
    const disabled = isEmpty || inputs.password !== inputs.confirm;

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

    return (
        <>
            <Title title="Sign in" />
            <Form margin="20px 0">
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
                    Sign in <span style={{ display: "none" }}>🙌</span>
                </RedButton>
            </Form>
        </>
    );
}

export default SigninForm;
