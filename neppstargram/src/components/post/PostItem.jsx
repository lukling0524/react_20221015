import styled from "styled-components";
import PostImgbox from "./PostImgbox";
import PostUser from "./PostUser";

function PostItem({ post }) {
    console.log(post);
    return (
        <Block>
            <PostUser />
            <PostImgbox imgUrls={post.img_urls} />
            <ContentBox>{post.body}</ContentBox>
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
