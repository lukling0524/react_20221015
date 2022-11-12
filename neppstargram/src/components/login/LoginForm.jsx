import { Form } from "../common/form";
import { Input } from "../common/input";
import Title from "../common/title";
import { Button, RedButton } from "../common/buttons";
import { Link } from "react-router-dom";

function LoginForm() {
    return (
        <>
            <Title title="login" />
            <Form margin="20px 0">
                <Input placeholder="email 🥞" />
                <Input placeholder="password 🍡" />
                <div style={{ margin: "30px 0 14px" }}>
                    <Button>Login 🎈</Button>
                    <RedButton>
                        <Link to="/signin">Sign in ✨</Link>
                    </RedButton>
                </div>
            </Form>
        </>
    );
}

export default LoginForm;
