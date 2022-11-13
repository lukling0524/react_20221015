import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getPost } from "../../api";
import SmoothMotion from "../common/SmoothMotion";

function Post() {
    return (
        <SmoothMotion>
            <Outlet />
        </SmoothMotion>
    );
}

export default Post;
