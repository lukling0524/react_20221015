import styled from "styled-components";

function CarouselItem() {
  return <Block>아이템</Block>;
}

const Block = styled.li`
  width: 100vw;
  height: 300px;
  flex-shrink: 0;
  list-style: none;
  background-color: lightblue;

  &:nth-child(odd) {
    background-color: lightgrey;
  }
`;

export default CarouselItem;
