import styled from "styled-components";

function FormBox({ children, onSubmit }) {
  return (
    <FormBoxWrapper>
      <Form onSubmit={onSubmit} noValidate>
        {children}
      </Form>
    </FormBoxWrapper>
  );
}

const FormBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  h3 {
    margin-bottom: 40px;
    font-size: 20px;
  }
`;

const Form = styled.form`
  width: 300px;
  padding: 50px 20px;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 4px;
`;

export default FormBox;
