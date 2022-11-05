import styled from "styled-components";

function Button({ text, bgColor, onClick }) {
  return (
    <DefaultButton bgColor={bgColor} onClick={onClick}>
      {text}
    </DefaultButton>
  );
}

Button.defaultProps = {
  bgColor: "#333",
};

const DefaultButton = styled.button`
  width: 100%;
  padding: 10px 0;
  color: #fff;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 4px;
  border: 0;
  outline: 0;

  & + & {
    margin-top: 6px;
  }
`;

export default Button;
