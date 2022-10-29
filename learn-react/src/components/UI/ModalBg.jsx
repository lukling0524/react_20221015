// import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

function ModalBg({ children }) {
  return <Block>{children}</Block>;
}

const Block = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export default ModalBg;
