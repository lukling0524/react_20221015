import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import styled, { css } from "styled-components";
import { todoState } from "../../state/todos";

function Scroll() {
    const [todos, setTodos] = useRecoilState(todoState);

    console.log(todos);
    const [scrollAmout, setScrollAmout] = useState(0);
    const [firstTop, setFirstTop] = useState(0);

    const handleScroll = (e) => {
        setScrollAmout(window.scrollY);
        setFirstTop(firstRef.current.getBoundingClientRect().top);
    };

    // 요소에 직접 접근할때는 Ref
    const firstRef = useRef(null);
    const secondRef = useRef(null);

    console.log(firstTop);
    //   const firstRefTop = firstRef.current.getBoundingClientRect().top;
    //   console.log(firstRefTop);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    //   console.log(scrollAmout);
    return (
        <div style={{ overflow: "hidden" }}>
            <h1>scroll</h1>
            <ImgBox scrollAmout={scrollAmout} />
            <p
                style={{
                    marginTop: 100,
                    transform: `translateX(${(-firstTop - 300) / 2}px)`,
                    fontWeight: 800,
                    fontSize: 20,
                }}
                ref={firstRef}
            >
                Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem,
                Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem,
                Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem,
                Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem,
                Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem,
                Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem,
                Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem,
                Lorem, Lorem, Lorem, Lorem, Lorem, Lorem, Lorem,
            </p>
            <p
                style={{
                    marginTop: 50,
                    transform: `translateX(${(firstTop - 300) * 6}px)`,
                    fontSize: 20,
                }}
                ref={secondRef}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                vitae perspiciatis ex, adipisci possimus unde. Hic, maxime!
                Maiores voluptas quod, fugit maxime ab cumque unde quam
                excepturi nisi quis molestias.
            </p>
        </div>
    );
}

const ImgBox = styled.div`
    margin-top: 600px;
    height: 600px;
    border: 1px solid red;
    background-color: #ff7234;
    background: url(${require("../../assets/images/img3.jpg")}) center top /
        cover no-repeat;

    ${({ scrollAmout }) => css`
        background-position: center
            ${scrollAmout < 600 ? 0 : scrollAmout - 600}px;
    `}
`;

export default Scroll;
