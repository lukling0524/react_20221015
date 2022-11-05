import styled from "styled-components";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import MovieHeader from "./components/movie/MovieHeader";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/pages/Movie";
import Tv from "./components/pages/Tv";
import Home from "./components/pages/Home";
import Post from "./components/practice/api/Post";
import Login from "./components/practice/api/Login";
import SignUp from "./components/practice/api/SignUp";
import Button from "./components/common/Button";
import { removeCookie } from "./utiles/cookie";

const GlobalStyle = createGlobalStyle`
    :root{
        --mainPadding: 10px 5%;
    }

    *{
        box-sizing: border-box;
    }

    a{
        color: inherit;
        text-decoration: none;
    }

    button{
      cursor: pointer;
    }
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <MovieHeader />
      <MainBlock>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie" element={<Movie />}></Route>
          <Route path="tv" element={<Tv />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="signUp" element={<SignUp />}></Route>
          <Route path="post" element={<Post />}></Route>
        </Routes>
      </MainBlock>
      {/* <LogoutBtn>
        <Button text="Logout" onClick={() => removeCookie("access-token")} />
      </LogoutBtn> */}
    </>
  );
}

const MainBlock = styled.main`
  padding: var(--mainPadding);
`;

const LogoutBtn = styled.div`
  position: fixed;
  width: 100px;
  top: 10px;
  right: 10px;
`;
export default App;
