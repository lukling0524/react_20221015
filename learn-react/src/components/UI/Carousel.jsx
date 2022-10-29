import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import CarouselWrapper from "./CarouselWrapper";

function Carousel() {
  return (
    <Block>
      <h1>Carousel</h1>

      <CarouselWrapper>
        {/* {new Array(3).fill(1).map((_, idx) => (
          <CarouselItem key={idx} id={idx + 1} />
        ))} */}

        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </CarouselWrapper>
    </Block>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
`;

export default Carousel;
