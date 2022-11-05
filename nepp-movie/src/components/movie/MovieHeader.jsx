import styled from "styled-components";
import MovieNav from "./MovieNav";
import InputBox from "./InputBox";
import { AiOutlineSearch } from "react-icons/ai";
function MovieHeader() {
  return (
    <HeaderBlock>
      <Logo>NEPP MOVIE</Logo>
      <MovieNav />
      <InputBox>
        <AiOutlineSearch />
      </InputBox>
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
