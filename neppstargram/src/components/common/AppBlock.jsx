import { Outlet } from "react-router-dom";
import Navigation from "./navigation/Navigation";

function AppBlock() {
    return (
        <div>
            <Outlet />
            <Navigation />
        </div>
    );
}

export default AppBlock;
