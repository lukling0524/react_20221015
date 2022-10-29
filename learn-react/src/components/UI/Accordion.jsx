import styled from "styled-components";
import AccordionItem from "./AccordionItem";

const menuList = [
  {
    id: 1,
    name: "react",
    content: "Lorem ipsum dolor sit amet",
  },
  {
    id: 2,
    name: "react accordion",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem dicta porro nihil odio necessitatibus hic quo aliquid officiis nostrum? Delectus illo numquam similique culpa velit fugit dicta dolorem nostrum.",
  },
  {
    id: 3,
    name: "react ui",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorem dicta porro nihil odio necessitatibus hic quo aliquid officiis nostrum?",
  },
];

function Accordion() {
  return (
    <Block>
      <h1>Accordion</h1>
      <ul>
        {menuList.map((menu) => (
          <AccordionItem key={menu.id} menu={menu} />
        ))}
      </ul>
    </Block>
  );
}

const Block = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background-color: #f7f7f7;

  ul {
    max-width: 500px;
    border: 1px solid #d1d1d1;
    border-radius: 10px;
  }
`;

export default Accordion;
