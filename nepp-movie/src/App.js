import styled from "styled-components";
import { Reset } from "styled-reset";
import { createGlobalStyle } from "styled-components";
import MovieHeader from "./components/movie/MovieHeader";
import { Route, Routes } from "react-router-dom";
import Movie from "./components/pages/Movie";
import Tv from "./components/pages/Tv";
import Home from "./components/pages/Home";

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
        </Routes>
      </MainBlock>
    </>
  );
}

const MainBlock = styled.main`
  padding: var(--mainPadding);
`;
export default App;
