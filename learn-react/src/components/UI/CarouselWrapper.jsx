import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useCallback, useState } from "react";

function CarouselWrapper({ children }) {
  const [currIdx, setCurrIdx] = useState(0);

  const changeIdx = useCallback(
    (operator) => {
      if (currIdx + operator === -1 || currIdx + operator === 3) return;
      setCurrIdx(currIdx + operator);
    },
    [currIdx]
  );

  return (
    <Block currIdx={currIdx}>
      <Btn style={{ left: 20 }} onClick={() => changeIdx(-1)}>
        <FaAngleLeft color="#fff" />
      </Btn>
      <ul>{children}</ul>
      <Btn style={{ right: 20 }} onClick={() => changeIdx(+1)}>
        <FaAngleRight color="#fff" />
      </Btn>
    </Block>
  );
}

const Block = styled.div`
  position: relative;
  width: 100vw;
  height: 300px;
  border: 1px solid #999;
  overflow: hidden;

  ul {
    display: flex;
    height: 100%;
    transform: translateX(${({ currIdx }) => currIdx * -100}vw);
    transition: transform 0.5s;
  }
`;

const Btn = styled.button`
  --size: 40px;

  width: var(--size);
  height: var(--size);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: opacity 0.3s;
  background-color: rgba(0, 0, 0, 0.5);
  border: 0;
  border-radius: 100%;
  z-index: 100;

  &:hover {
    opacity: 0.7;
  }
`;

export default CarouselWrapper;
