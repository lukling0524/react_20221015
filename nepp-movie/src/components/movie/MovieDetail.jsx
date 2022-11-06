import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getMovieDetail } from "../../utiles/movie_api";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetail(id).then(({ data }) => setMovie(data));
  });

  const {
    title,
    poster_path,
    backdrop_path,
    overview,
    release_date,
    homepage,
  } = movie;

  const url = "https://image.tmdb.org/t/p/original" + poster_path;
  const back_url = "https://image.tmdb.org/t/p/original" + backdrop_path;

  useEffect(() => {
    getMovieDetail(id).then(({ data }) => setMovie(data));
  }, [id]);

  return (
    <DetailBox back_url={back_url}>
      <DetailInner>
        <ImgBox>
          <img src={url} alt={title} />
        </ImgBox>
        <DetailContentBox>
          <TitleBox>
            <a href={homepage}>
              {title}
              <span>({release_date?.slice(0, 4)})</span>
            </a>
            <div>{overview}</div>
          </TitleBox>
        </DetailContentBox>
      </DetailInner>
    </DetailBox>
  );
}

const DetailBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  background-color: rgba(0, 0, 0, 0.4);
  background-image: url(${({ back_url }) => back_url});
  background-size: cover;
  background-blend-mode: darken;
`;

const DetailInner = styled.div`
  display: flex;
  max-width: 1024px;
  flex: 1;
  padding: 0 20px;
`;

const ImgBox = styled.div`
  width: 300px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    background-color: #999;
  }
`;

const DetailContentBox = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 20px;
`;

const TitleBox = styled.div`
  a {
    font-size: 24px;
    font-weight: 700;
    color: #fff;
  }

  span {
    margin-left: 10px;
    font-size: 16px;
    color: #eee;
  }

  div {
    margin-top: 20px;
    color: #fff;
    line-height: 1.4;
  }
`;

export default MovieDetail;
