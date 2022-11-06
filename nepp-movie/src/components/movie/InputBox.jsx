import styled from "styled-components";

function InputBox({
  type,
  children,
  placeholder,
  name,
  onChange,
  handleFocus,
}) {
  return (
    <BarBlock>
      <SearchInput
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onBlur={() => handleFocus(false)}
        onFocus={() => handleFocus(true)}
      />
      {children}
    </BarBlock>
  );
}

InputBox.defaultProps = {
  type: "text",
};

const BarBlock = styled.div`
  width: 100%;
  max-width: 300px;
  min-width: 140px;
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #d1d1d1;
  border-radius: 4px;

  & + & {
    margin-top: 10px;
  }
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
export default InputBox;
