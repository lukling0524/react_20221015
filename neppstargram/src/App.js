import { Route, Routes } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Login from "../src/components/pages/Login";
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
                <Routes>
                    <Route path="/" element={<Login />}>
                        <Route path="login" element={<LoginForm />} />
                        <Route path="signin" element={<SigninForm />} />
                    </Route>
                    <Route path="post" element={<Post />}>
                        <Route path="" element={<PostList />} />
                        <Route path=":id" element={<PostDetail />} />
                    </Route>
                </Routes>
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
    width: 300px;
    height: 500px;
    /* padding: 10px 20px; */
    text-align: center;
    border: 1px solid;
`;

export default App;
