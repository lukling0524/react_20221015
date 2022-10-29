import styled, { keyframes } from "styled-components";

function Modal({ title, content, setModalOn }) {
  return (
    <Block>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <BtnClose
        onClick={() => {
          setModalOn(false);
        }}
      >
        CLOSE
      </BtnClose>
    </Block>
  );
}

const slideUp = keyframes`
    from{
        transform: translateY(20px);
    }
`;

const fadeIn = keyframes`
    from{
        opacity: 0;
    }
`;

const Block = styled.div`
  width: 300px;
  height: 200px;
  background-color: #fff;
  border-radius: 10px;
  animation: ${slideUp} 0.8s, ${fadeIn} 0.8s;
  animation-fill-mode: both;
`;

const Title = styled.h3`
  padding: 10px 14px;
  border-bottom: 1px solid #d1d1d1;
`;

const Content = styled.p`
  padding: 10px 14px;
`;

const BtnClose = styled.button`
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 8px 14px;
  color: #fff;
  border-radius: 5px;
  background-color: #999;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: inset 2px 3px 4px #707070;
  }
`;

export default Modal;
