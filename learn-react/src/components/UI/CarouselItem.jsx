import styled from "styled-components";
import wave from "../../assets/images/img1.jpg";

function CarouselItem({ slide }) {
  const { id, url } = slide;
  return (
    <Block>
      <img src={wave} alt="qwe" />
      {/* <img src={require(url)} alt="qwe" /> */}
    </Block>
  );
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

  img {
    width: 100%;
  }
`;

export default CarouselItem;
