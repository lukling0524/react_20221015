import styled from "styled-components";

function TodoInput() {
  return (
    <Inputblock>
      <input type="text" />
      <BtnSubmit>submit</BtnSubmit>
    </Inputblock>
  );
}

const Inputblock = styled.div`
  padding: 5px 10px;

  input {
    width: 100%;
    height: 40px;
    padding: 4px 8px;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #d1d1d1;
    border-radius: 5px;
  }
`;

const BtnSubmit = styled.button`
  width: 100%;
  height: 40px;
  color: #fff;
  border: none;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 5px;
  cursor: pointer;
`;

export default TodoInput;
