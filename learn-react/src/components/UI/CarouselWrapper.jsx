import styled from "styled-components";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

function CarouselWrapper({ children }) {
  return (
    <Box>
      <BsFillArrowLeftCircleFill className="arrow arrow__left" />
      <Block>
        <ul>{children}</ul>
      </Block>
      <BsFillArrowRightCircleFill className="arrow arrow__right" />
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;

  .arrow {
    --size: 30px;
    --distance: 20px;

    position: absolute;
    width: var(--size);
    height: var(--size);
    cursor: pointer;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7;
    }

    &__left {
      left: var(--distance);
    }

    &__right {
      right: var(--distance);
    }
  }
`;

const Block = styled.div`
  width: 100vw;
  height: 300px;
  border: 1px solid #999;
  overflow: hidden;

  ul {
    display: flex;
    height: 100%;
  }
`;

export default CarouselWrapper;
