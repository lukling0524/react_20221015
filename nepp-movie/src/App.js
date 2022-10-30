import { useState } from "react";
import { Link, Route, Routes, useNavigate, useRoutes } from "react-router-dom";
import styled from "styled-components";
import { Reset } from "styled-reset";
import About from "./components/About";
import Detail from "./components/Detail";
import Header from "./components/Header";
import Home from "./components/Home";

const routesArr = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
    children: [
      {
        path: ":userId",
        element: <Detail />,
      },
    ],
  },
];

function App() {
  const [userId, setUserId] = useState(0);
  const navigate = useNavigate();
  const element = useRoutes(routesArr);

  return (
    <>
      <AppBlock>
        <Reset />
        <Header />
        <input type="number" onChange={(e) => setUserId(e.target.value)} />
        <button onClick={() => navigate("about/" + userId)}>이동</button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          {/* 뒤에 뭔가 더 있다면 /*를 붙임  => 출력됨 (중첩라우팅)*/}
        </Routes>
        {element}
        {/* 위의 Routes와 동일한 코드 */}
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
