import { AnimatePresence } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Login from "../src/components/pages/Login";
import AppBlock from "./components/common/AppBlock";
import LoginForm from "./components/login/LoginForm";
import SigninForm from "./components/login/SigninForm";
import Post from "./components/pages/Post";
import PostDetail from "./components/post/PostDetail";
import PostList from "./components/post/PostList";

function App() {
    const GlobalStyle = createGlobalStyle`
    :root{
        --borderRadius: 4px;
        --space : 10px;
        --postWidth: 300px;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
    
    body{
        background-color: #dfebf1;
    }
  `;

    return (
        <Block>
            <InnerBlock>
                <GlobalStyle />
                <AnimatePresence>
                    <Routes>
                        <Route path="/accounts" element={<Login />}>
                            <Route path="login" element={<LoginForm />} />
                            <Route path="signin" element={<SigninForm />} />
                        </Route>
                        <Route path="/" element={<AppBlock />}>
                            <Route path="post" element={<Post />}>
                                <Route path="" element={<PostList />} />
                                <Route path=":id" element={<PostDetail />} />
                            </Route>
                        </Route>
                    </Routes>
                </AnimatePresence>
            </InnerBlock>
        </Block>
    );
}

const Block = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InnerBlock = styled.div`
    position: relative;
    width: var(--postWidth);
    height: 500px;
    /* display: flex;
    align-items: center;
    text-align: center; */
    border: 1px solid;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export default App;
