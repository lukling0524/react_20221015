import styled from "styled-components";
import InputBox from "./InputBox";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { getSearch } from "../../utiles/movie_api";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { BiMoviePlay, BiTv } from "react-icons/bi";

const Icons = {
  person: <BsPerson />,
  tv: <BiTv />,
  movie: <BiMoviePlay />,
};

function SearchBox() {
  const [keyword, setKeyword] = useState("1");
  const [timer, setTimer] = useState(null);
  const [result, setResult] = useState([]);
  const [isFocus, setIsFocus] = useState(false);
  const isShow = isFocus && result.length > 0;

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(
      setTimeout(() => {
        if (keyword.length === 0) {
          setResult([]);
          return;
        }
        getSearch(keyword).then((res) => setResult(res.data.results));
      }, 500)
    );
  }, [keyword]);

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  const handleFocus = (bool) => {
    setTimeout(() => {
      setIsFocus(bool);
    }, 100);
  };

  return (
    <Wrap>
      <InputBox onChange={handleInput} handleFocus={handleFocus}>
        <AiOutlineSearch />
      </InputBox>

      {isShow && (
        <ResultList>
          {result.map((item) => (
            <ResultItem>
              <Link to={item.media_type + "/" + item.id}>
                {Icons[item.media_type]}
                {item.name || item.title}
              </Link>
            </ResultItem>
          ))}
        </ResultList>
      )}
    </Wrap>
  );
}
const Wrap = styled.div`
  position: relative;
`;

const ResultList = styled.ul`
  width: 100%;
  max-height: 200px;
  position: absolute;
  top: calc(100% + 10px);
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  overflow: auto;
`;

const ResultItem = styled.li`
  & + & {
    border-top: 1px solid #ddd;
  }

  a {
    display: block;
    height: 100%;
    padding: 8px 10px;

    width: 100%;
    max-width: 300px;
    min-width: 140px;

    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:hover {
      background-color: #f1f2f3;
    }
  }
`;

export default SearchBox;
