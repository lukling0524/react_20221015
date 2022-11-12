import styled from "styled-components";

function PostUser() {
    return (
        <Block>
            <ImgCircle>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzwL4N_siRRO59z1YZxfLBdMdm73-FRfjEckG4qIbeBXNk3xNmLHRPTbB1-aBayTjeoQ&usqp=CAU"
                    alt="image"
                />
            </ImgCircle>
            이름
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 10px;
`;

const ImgCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;

    img {
        height: 100%;
    }
`;
export default PostUser;
