import styled, { css } from "styled-components";
function Button({ text, size, color }) {
  return (
    <StyledButton height={20} size={size} color={color}>
      {text}
    </StyledButton>
  );
}

//정의되지 않았을 때의 기본값
Button.defaultProps = {
  color: "green",
};

const StyledButton = styled.button`
  height: 40px;
  padding: 6px 20px;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #999;

  height: ${(props) => props.height + "px"};

  ${({ theme, color }) => css`
    background-color: ${theme.colors[color]};
  `}

  //조건에 따라 css 적용 (size가 "big"일 때만 해당 스타일 출력)
  ${({ size }) =>
    size === "big" &&
    css`
      font-size: 1.4rem;
      font-weight: bold;
      height: 100px;
    `}

  & + & {
    margin-left: 20px;
  }
`;

export default Button;
