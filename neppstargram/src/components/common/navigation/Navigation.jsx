import styled from "styled-components";
import NavigationItem from "./NavigationItem";
import { FaHome } from "react-icons/fa";
import { BsPersonFill, BsSearch, BsFillHeartFill } from "react-icons/bs";

const navigation = [
    {
        id: 1,
        path: "/post",
        icon: <FaHome />,
    },
    {
        id: 2,
        path: "/search",
        icon: <BsSearch />,
    },
    {
        id: 3,
        path: "/like",
        icon: <BsFillHeartFill />,
    },
    {
        id: 4,
        path: "/profile",
        icon: <BsPersonFill />,
    },
];

function Navigation() {
    return (
        <Block>
            {navigation.map((menu) => (
                <NavigationItem menu={menu} />
            ))}
        </Block>
    );
}

const Block = styled.div`
    width: 100%;
    height: 40px;
    position: sticky;
    display: flex;
    left: 0;
    bottom: 0;
    background-color: #fff;
    z-index: 1000;
`;
export default Navigation;
