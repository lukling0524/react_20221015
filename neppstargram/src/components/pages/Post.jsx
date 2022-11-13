import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getPost } from "../../api";

function Post() {
    useEffect(() => {
        getPost(1).then((res) => console.log(res));
    }, []);
    return (
        <div>
            <Outlet />
        </div>
    );
}

export default Post;
