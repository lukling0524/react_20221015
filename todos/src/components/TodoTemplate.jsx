import styled from "styled-components";

//children property를 넣어야 하위 요소를 children으로 넘겨서 App.js에 출력됨
function TodoTemplate({ children }) {
  return <Templateblock>{children}</Templateblock>;
}

const Templateblock = styled.div`
  flex-direction: column;
  width: 300px;
  height: 500px;
  display: flex;
  padding: 8px 0;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 6px 6px 10px #8d8c8c66;
`;

export default TodoTemplate;
