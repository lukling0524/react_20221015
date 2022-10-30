import { useEffect, useState } from "react";

function Post() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/posts")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    // await 값이 없으면, 서버가 통신하는 그 찰나의 사이에 값이 없는 result가 출력되어 오류
    // await을 사용하여 비동기처리해야함
    async function fetchData() {
      let result = await fetch("http://localhost:3000/posts");
      let data = await result.json();
      setPosts(data);
      //   console.log(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h3>TTTEEEESSSSTTTT</h3>
      <input type="number" />
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}

export default Post;
