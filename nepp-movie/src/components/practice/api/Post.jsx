import { useEffect, useState } from "react";
import axios from "axios";

function Post() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");

  const onSubmit = async () => {
    let result = await axios.post("http://localhost:3000/posts", {
      title,
      author: "abc",
    });
    console.log(result);
    // fetchData();
  };

  const onDelete = async (id) => {
    let result = await axios.delete("http://localhost:3000/posts/" + id);
    console.log(result);
    // fetchData();
  };

  useEffect(() => {
    // fetch("http://localhost:3000/posts")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));

    // await 값이 없으면, 서버가 통신하는 그 찰나의 사이에 값이 없는 result가 출력되어 오류
    // await을 사용하여 비동기처리해야함
    async function fetchData() {
      let result = await axios.get("http://localhost:3000/posts");
      setPosts(result.data);

      //   let result = await fetch("http://localhost:3000/posts");
      //   let data = await result.json();
      //   setPosts(data);
      //   console.log(result);
    }

    fetchData();
  }, []);

  return (
    <div>
      <h3>Practive API</h3>
      {/* <input type="number" onChange={(e) => setId(e.target.value)} /> */}
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={onSubmit}>등록</button>
      {posts.map((post) => (
        <li key={post.id}>
          {post.title}
          <button onClick={() => onDelete(post.id)}>삭제</button>
        </li>
      ))}
    </div>
  );
}

export default Post;
