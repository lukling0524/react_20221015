import { Link } from "react-router-dom";
import styled from "styled-components";
function MoviePopularItem({ movie }) {
  const { id, title, poster_path, release_date } = movie;
  const url = "https://image.tmdb.org/t/p/original" + poster_path;

  return (
    <ItemBlock>
      <Link to={id + ""}>
        <Imgbox>
          <img scr={url} alt={title} />
        </Imgbox>
        <TitleBox>
          <strong>{release_date}</strong>
          <h4>{title}</h4>
        </TitleBox>
      </Link>
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  list-style: none;
  text-align: center;
`;

const TitleBox = styled.div`
  strong {
    font-size: 12px;
    color: #aaa;
  }

  h4 {
    font-weight: 700;
  }
`;

const Imgbox = styled.div`
  width: 150px;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    background-color: #999;
  }
`;
export default MoviePopularItem;
