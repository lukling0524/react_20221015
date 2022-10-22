import styled, { ThemeProvider } from "styled-components";
import Button from "./components/Button";

function App() {
  return (
    <ThemeProvider
      theme={{
        colors: {
          red: "#ff0000",
          blue: "#133afe",
          green: "#23fb13",
        },
      }}
    >
      <div>
        <Title>hello</Title>
        <Container>
          <Button text="click" size="big" color="red" />
          <Button text="클릭" color="blue" />
        </Container>
      </div>
    </ThemeProvider>
  );
}

//styled component 정의도 파스칼케이스로 작성.
//컴포넌트 이름을 직관적으로 지을수있음
const Title = styled.h1`
  color: #ff0000;
  background-color: #ddd;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 300px;
  height: 150px;
  border: 1px solid #333;
  margin: 0 auto;
`;

export default App;
