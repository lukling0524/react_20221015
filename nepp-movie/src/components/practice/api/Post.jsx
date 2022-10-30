import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import useAsync from "./useAsync";

// function reducer(state, action) {
//   switch (action.type) {
//     case "LOADING":
//       return {
//         loading: true,
//         data: null,
//         error: null,
//       };
//     case "SUCCESS":
//       return {
//         loading: false,
//         data: action.data,
//         error: null,
//       };
//     case "ERROR":
//       return {
//         loading: false,
//         data: null,
//         error: action.error,
//       };
//     default:
//       throw new Error(`Fail action type :${action.type}`);
//   }
// }

function Post() {
  //   const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [state, fetchData] = useAsync(() => {
    return axios.get("v1/search/book.json", {
      params: {
        query: "javascript",
      },
      headers: {
        "X-Naver-Client-Id": process.env.REACT_APP_ClientId,
        "X-Naver-Client-Secret": process.env.REACT_APP_ClientSecret,
      },
    });
  });

  console.log(process.env.REACT_APP_ClientId);

  //   const [state, dispatch] = useReducer(reducer, {
  //     loading: false,
  //     data: null,
  //     error: null,
  //   });

  const onSubmit = async () => {
    let result = await axios.post("http://localhost:3000/posts", {
      title,
      author: "abc",
    });
    console.log(result);
    fetchData();
  };

  const onDelete = async (id) => {
    let result = await axios.delete("http://localhost:3000/posts/" + id);
    console.log(result);
    fetchData();
  };

  //   async function fetchData() {
  //     dispatch({ type: "LOADING" });

  //     try {
  //       let { data } = await axios.get("http://localhost:3000/posts");
  //       setPosts(data);

  //       dispatch({ type: "SUCCESS", data });
  //     } catch (error) {
  //       dispatch({ type: "ERROR", error });
  //     }
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const { loading, data, error } = state;

  if (loading) return <div>로딩중....</div>;
  if (error) return <div>에러발생!!!!</div>;
  if (!data) return; // 데이터가 없으면 접근 x : 하단 옵셔널 체이닝과 똑같은 기능

  return (
    <div>
      <h3>Practive API</h3>
      {/* <input type="number" onChange={(e) => setId(e.target.value)} /> */}
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={onSubmit}>등록</button>
      {/* ?는 옵셔널체이닝 ↓ */}
      {data.items.map((item) => (
        <li key={item.isbn}>
          {item.title}({item.author})
          <img src={item.image} />
        </li>
      ))}
    </div>
  );
}

export default Post;
