import styled from "styled-components";
import PostImgbox from "./PostImgbox";
import PostUser from "./PostUser";

function PostItem() {
    return (
        <Block>
            <PostUser />
            <PostImgbox />
            <ContentBox>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio, fuga.
            </ContentBox>
        </Block>
    );
}

const Block = styled.div`
    & + & {
        border-top: 1px solid #bbb;
    }
`;

const ContentBox = styled.div`
    padding: 10px;
`;

export default PostItem;
