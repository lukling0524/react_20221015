import { Outlet } from "react-router-dom";
import styled from "styled-components";

function Login() {
    return (
        <Block>
            <Outlet />
        </Block>
    );
}

const Block = styled.div`
    height: 100%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Login;
