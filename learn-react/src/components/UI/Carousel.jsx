import { useEffect, useState } from "react";
import styled from "styled-components";
import CarouselItem from "./CarouselItem";
import CarouselWrapper from "./CarouselWrapper";
import Modal from "./Modal";
import ModalBg from "./ModalBg";

const slideList = [
  {
    id: 1,
    url: "../../assets/images/img1.jpg",
  },
];

const preventWheel = (e) => {
  e.preventDefault();
};

function Carousel() {
  const [modalOn, setModalOn] = useState(false);

  useEffect(() => {
    // if (modalOn)
    //   window.addEventListener("wheel", preventWheel, { passive: false });
    // else window.removeEventListener("wheel", preventWheel, { passive: false });

    if (modalOn) {
      document.body.style.height = "100%";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    }
  }, [modalOn]);

  return (
    <>
      <Block>
        <h1>Carousel</h1>

        <CarouselWrapper>
          <CarouselItem slide={slideList[0]} />
        </CarouselWrapper>
      </Block>
      <button
        onClick={() => {
          setModalOn(true);
        }}
      >
        OPEN
      </button>
      {modalOn && (
        <ModalBg>
          <Modal title="test" content="contnet" setModalOn={setModalOn} />
        </ModalBg>
      )}
    </>
  );
}

const Block = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
`;

export default Carousel;
