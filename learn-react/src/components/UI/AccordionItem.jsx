import styled, { css } from "styled-components";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";

function AccordionItem({ menu }) {
  const { name, content } = menu;
  const [active, setActive] = useState(false);

  const onToggle = (e) => {
    setActive(!active);
  };

  return (
    <Block>
      <MenuNameBox>
        <h3>{name}</h3>
        <IconBox active={active}>
          <FaAngleDown cursor="pointer" onClick={onToggle}></FaAngleDown>
        </IconBox>
      </MenuNameBox>
      <MenuContent active={active}>{content}</MenuContent>
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

const IconBox = styled.div`
  transform: rotate(${({ active }) => (active ? -180 : 0)}deg);
  transition: transform 0.4s;
`;

const MenuContent = styled.p`
  max-height: ${({ active }) => (active ? 200 : 0)}px;

  /* padding: 5px 40px 5px 20px; */
  overflow: hidden;
  transition: max-height 0.8s;

  /* ${({ active }) =>
    active &&
    css`
      max-height: 200px;
      max-height: auto;
    `} */
`;

export default AccordionItem;
