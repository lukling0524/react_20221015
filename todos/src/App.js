import { darken, lighten } from "polished";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Todoheader from "./components/TodoHeader";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";
import useTodoReducer from "./hooks/useTodoReducer";

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
  const [todos, dispatch] = useTodoReducer();

  return (
    <>
      <GlobalStyled />
      <ThemeProvider
        theme={{
          colors: {
            main: "#3275c1",
            active: lighten(0.1, "#3275c1"),
          },
        }}
      >
        <AppBlock>
          <TodoTemplate>
            <Todoheader todos={todos} />
            <TodoList todos={todos} dispatch={dispatch} />
            <TodoInput todos={todos} dispatch={dispatch} />
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
