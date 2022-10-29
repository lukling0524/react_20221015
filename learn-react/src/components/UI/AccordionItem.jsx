import styled, { css } from "styled-components";
import { FaAngleDown } from "react-icons/fa";

function AccordionItem({ menu }) {
  const { name, content } = menu;
  return (
    <Block>
      <MenuNameBox>
        <h3>{name}</h3>
        <FaAngleDown></FaAngleDown>
      </MenuNameBox>
      <MenuContent active={true}>{content}</MenuContent>
    </Block>
  );
}

const Block = styled.li`
  padding: 10px;
  list-style: none;
  border-bottom: 1px solid #d1d1d1;

  &:last-child {
    border-bottom: 0;
  }
`;

const MenuNameBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MenuContent = styled.p`
  height: 100%;
  max-height: 0;
  overflow: hidden;
  transition: height 0.25s;

  ${({ active }) =>
    active &&
    css`
      /* max-height: auto; */
    `}
`;

export default AccordionItem;
