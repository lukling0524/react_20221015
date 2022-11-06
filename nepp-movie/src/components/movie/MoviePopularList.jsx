import styled from "styled-components";

// import axios from "axios";
import { useEffect, useState } from "react";
import MoviePopularItem from "./MoviePopularItem";
import Title from "./Title";
// import { movie_instance } from "../../utiles/movie_api";
import { getPopularMovieList } from "../../utiles/movie_api";

function MoviePopularList() {
  const [popularList, setPopularList] = useState([]);

  useEffect(() => {
    getPopularMovieList().then((res) => setPopularList(res.data.results));
  }, []);

  // useEffect(() => {
  //   movie_instance
  //     .get("movie/popular")
  //     .then((res) => setpopularList(res.data.results));

  //   // console.log(popularList);
  // });
  return (
    <div>
      <Title title={"Movies"} />
      <MovieListBlock>
        {popularList.map((movie) => (
          <MoviePopularItem key={movie.id} movie={movie}></MoviePopularItem>
        ))}
      </MovieListBlock>
    </div>
  );
}

const MovieListBlock = styled.ul`
  display: flex;
  overflow: auto hidden;
`;

export default MoviePopularList;
