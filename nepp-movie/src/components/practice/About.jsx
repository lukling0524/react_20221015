import { Route, Routes } from "react-router-dom";
import Detail from "./Detail";

function About() {
  return (
    <div>
      <h1>About</h1>
      <p>About 컴포넌트임</p>
      <Routes>
        <Route path=":userId" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default About;
