import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { getPost } from "../../api";
import { motion } from "framer-motion";

function Post() {
    useEffect(() => {
        getPost(1).then((res) => console.log(res));
    }, []);
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Outlet />
        </motion.div>
    );
}

export default Post;
