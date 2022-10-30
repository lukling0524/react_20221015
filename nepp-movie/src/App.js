import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Reset } from "styled-reset";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <>
      <AppBlock>
        <Reset />
        <ul>
          <li>
            <StyledLink to="/">HOME</StyledLink>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </AppBlock>
    </>
  );
}

const AppBlock = styled.div`
  a {
    /* color: inherit; */
    text-decoration: none;
    font-weight: 800;
    font-size: 20px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

//스타일 덮어쓰기
const StyledLink = styled(Link)`
  color: red;
`;

export default App;
