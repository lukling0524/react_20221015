import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
  return (
    <BarBlock>
      <SearchInput type="text" />
      <AiOutlineSearch />
    </BarBlock>
  );
}

const BarBlock = styled.div`
  max-width: 260px;
  min-width: 140px;
  display: flex;
  flex: 1;
  align-items: center;
  padding: 5px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  max-width: 100%;
  height: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
  border: 0;
  outline: 0;
`;
export default SearchBar;
