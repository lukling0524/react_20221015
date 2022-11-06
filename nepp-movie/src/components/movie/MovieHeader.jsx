import styled from "styled-components";
import MovieNav from "./MovieNav";
import InputBox from "./InputBox";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useEffect } from "react";
import { getMovieDetail, getSearch } from "../../utiles/movie_api";
import SearchBox from "./SearchBox";

const debounce = (func, delay) => {
  let timer;
  return function () {};
};

function MovieHeader() {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    getSearch(keyword).then((res) => console.log(res));
  }, [keyword]);

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <HeaderBlock>
      <Logo>NEPP MOVIE</Logo>
      <MovieNav />
      <SearchBox> </SearchBox>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.header`
  display: flex;
  align-items: center;
  padding: var(--mainPadding);
  border: 1px solid #ddd;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 900;
`;

export default MovieHeader;
