import styled from "styled-components";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";
import { useCookies } from "react-cookie";
import { getCookie } from "../../../utiles/cookie";
import { BiHeart } from "react-icons/bi";

function Post() {
  const [postList, setPostList] = useState([]);

  const [cookies, removeCookie] = useCookies(["access-token"]);

  useEffect(() => {
    removeCookie(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJzdWIiOiI2MzY1ZDk0YzViYjU0NmFkOGZhYmIzNGYiLCJpYXQiOjE2Njc2MTk5OTYsImV4cCI6MTY5OTE3NzU5Nn0.Rzbxc0EPnMXl7FxP_xWRB1ijvbVL6Dq76zXXzcQ0NQo"
    );
    axios
      .get("http://101.101.218.43/posts/all/1", {
        headers: {
          Authorization: `bearer ${cookies["access-token"]}`,
        },
      })
      .then((res) => {
        setPostList(res.data.data);

        console.log(res.data.data);
      });
  }, []);

  return (
    <PostListBlick>
      <h3>Practive API</h3>
      <ul>
        {postList.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </PostListBlick>
  );
}

const PostListBlick = styled.div`
  display: flex;
  justify-content: center;

  ul {
    border: 1px solid;
  }
`;

function PostItem({ post }) {
  const { body, img_urls, like_count } = post;

  return (
    <PostItemBlock>
      <ImgBox>
        {img_urls.map((url) => (
          <img src={url} alt="" />
        ))}
      </ImgBox>
      <BodyBlock> {body}</BodyBlock>
      <div>
        <BiHeart />
        {like_count}
      </div>
    </PostItemBlock>
  );
}

const PostItemBlock = styled.li`
  padding: 10px 10px 5px;
  border-bottom: 1px solid;

  &:last-child {
    border-bottom: 0;
  }
`;

const BodyBlock = styled.p`
  margin-top: 10px;
  font-size: 14px;
`;

const ImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 4px;

  img {
    width: 100%;
  }
`;

export default Post;
