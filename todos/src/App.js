import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Todoheader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import TodoTemplate from "./components/TodoTemplate";

//글로벌 스타일 (reset) 적용
const GlobalStyled = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
}`;

function App() {
  return (
    <>
      <GlobalStyled />
      <ThemeProvider
        theme={{
          colors: {
            main: "#3275c1",
          },
        }}
      >
        <AppBlock>
          <TodoTemplate>
            <Todoheader />
            <TodoList />
            <TodoInput />
          </TodoTemplate>
        </AppBlock>
      </ThemeProvider>
    </>
  );
}

const AppBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f4f4;
`;

export default App;
