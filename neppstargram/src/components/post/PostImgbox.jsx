import styled from "styled-components";

function PostImgbox() {
    return (
        <Block>
            <ImgList>
                <li>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzwL4N_siRRO59z1YZxfLBdMdm73-FRfjEckG4qIbeBXNk3xNmLHRPTbB1-aBayTjeoQ&usqp=CAU"
                        alt="image"
                    />
                </li>
            </ImgList>
        </Block>
    );
}

const Block = styled.div`
    height: 200px;
    overflow: hidden;
    border: 1px solid;
`;

const ImgList = styled.div`
    display: flex;
`;

export default PostImgbox;
