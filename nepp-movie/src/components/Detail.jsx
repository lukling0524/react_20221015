import { useParams } from "react-router-dom";

function Detail() {
  const { userId } = useParams(); // 숫자를 받아도 string 타입으로 출력됨
  console.log(typeof parseInt(userId)); // parseInt(string)을 통해 nummber 타입으로 변환

  return (
    <div>
      <h2>Detail</h2>
      <p>Detail {userId}</p>
    </div>
  );
}

export default Detail;
