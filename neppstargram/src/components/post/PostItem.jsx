import styled from "styled-components";
import PostImgbox from "./PostImgbox";
import PostUser from "./PostUser";

function PostItem() {
    return (
        <Block>
            <PostUser />
            <PostImgbox />
        </Block>
    );
}

const Block = styled.div``;

export default PostItem;
