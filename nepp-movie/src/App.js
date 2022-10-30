import { useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Reset } from "styled-reset";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  const [userId, setUserId] = useState(0);
  const navigate = useNavigate();
  return (
    <>
      <AppBlock>
        <Reset />
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <input type="number" onChange={(e) => setUserId(e.target.value)} />
        <button onClick={() => navigate("about/" + userId)}>이동</button>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          {/* 뒤에 뭔가 더 있다면 /*를 붙임  => 출력됨 (중첩라우팅)*/}
        </Routes>
      </AppBlock>
    </>
  );
}

const AppBlock = styled.div`
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 800;
    font-size: 20px;

    &:hover {
      opacity: 0.8;
    }
  }
  ul {
    display: flex;
    margin-bottom: 10px;
    li {
      margin: 0 20px;

      &:hover {
        background-color: #d1d2d3;
      }
    }
  }
`;

//스타일 덮어쓰기
// const StyledLink = styled(Link)`
//   color: red;
// `;

export default App;
