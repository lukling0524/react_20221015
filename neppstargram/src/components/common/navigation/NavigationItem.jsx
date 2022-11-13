import { Link } from "react-router-dom";
import styled from "styled-components";

function NavigationItem({ menu }) {
    return (
        <Block>
            <Link to={menu.path}>{menu.icon}</Link>
        </Block>
    );
}

const Block = styled.div`
    flex: 1;
    color: #3391c0;
    border-top: 1px solid #ccc;
    & + & {
        border-left: 1px solid #ccc;
    }

    &:hover {
        background-color: #dfebf1;
    }

    a {
        display: block;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
`;
export default NavigationItem;
