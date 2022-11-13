import styled from "styled-components";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from "react";

function PostImgbox() {
    const imgUrls = [
        "https://url.kr/nkrx4q",
        "https://url.kr/dp7vuj",
        "https://url.kr/d3qa5x",
    ];
    const [idx, setIdx] = useState(0);
    const handleIdx = (operator) => {
        if (operator === -1) {
            if (idx > 0) setIdx(idx + operator);
        } else {
            if (idx + operator <= imgUrls.length - 1) setIdx(idx + operator);
        }
    };
    return (
        <Block>
            <ImgList idx={idx}>
                {imgUrls.map((url) => (
                    <li>
                        <img src={url} alt="as" />
                    </li>
                ))}
            </ImgList>
            <Btn onClick={() => handleIdx(-1)}>
                <FaAngleLeft color="rgba(255,255,255,0.8)" />
            </Btn>
            <Btn onClick={() => handleIdx(1)}>
                <FaAngleRight color="rgba(255,255,255,0.8)" />
            </Btn>
        </Block>
    );
}

const Block = styled.div`
    position: relative;
    height: var(--postWidth);
    overflow: hidden;
`;

const ImgList = styled.ul`
    //position: relative;
    display: flex;
    height: 100%;
    transform: translate(${({ idx }) => idx * -300}px);
    transition: transform 0.4s;

    li {
        width: var(--postWidth);
        flex-shrink: 0;
    }

    img {
        height: 100%;
    }
`;

const Btn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 0;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.25s;
    cursor: pointer;

    &:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }

    &:nth-of-type(1) {
        left: 10px;
    }

    &:nth-of-type(2) {
        right: 10px;
        //left: 180px;
    }
`;

export default PostImgbox;
