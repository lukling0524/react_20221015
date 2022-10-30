import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const navList = [
  {
    id: 1,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    text: "Movies",
    url: "movie",
  },
  {
    id: 3,
    text: "TV shows",
    url: "tv",
  },
];

function MovieNav() {
  const { pathname } = useLocation();
  const url = pathname.split("/")[1];

  return (
    <NavBlock>
      <ul>
        {navList.map((menu) => (
          <NavItem key={menu.id} menu={menu} active={url === menu.url} />
        ))}
      </ul>
    </NavBlock>
  );
}

const NavBlock = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 40px;

  @media screen and (max-width: 600px) {
    margin: 10px 20px;
  }

  ul {
    display: table;
  }
`;

function NavItem({ menu, active }) {
  const { text, url } = menu;
  return (
    <ItemBlock active={active}>
      <Link to={url}>{text}</Link>
    </ItemBlock>
  );
}

const ItemBlock = styled.li`
  display: table-cell;
  vertical-align: middle;
  text-align: center;

  font-weight: ${({ active }) => active && "bold"};

  & + & {
    padding-left: 20px;
  }
`;

export default MovieNav;
