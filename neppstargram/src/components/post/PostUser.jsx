import styled from "styled-components";

function PostUser() {
    return (
        <Block>
            <ImgCircle>
                <img src="https://url.kr/dp7vuj" alt="profile" />
            </ImgCircle>
            이름
        </Block>
    );
}

const Block = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
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
