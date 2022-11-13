import axios from "axios";

//화면이 많으면 각 컴포넌트별로 분리하는게 좋음.. api가 수십개라면 여기서 다 찾기 쉽지 않음

export const postSignIn = async (name, email, password) => {
    try {
        const result = await axios.post("http://101.101.218.43/users", {
            name,
            email,
            password,
        });

        return result;
    } catch (e) {
        console.log(e);
        throw new Error(alert("Please Check your info 😢"));
    }
};

export const postlogin = async (email, password) => {
    try {
        const result = await axios.post("http://101.101.218.43/users/login", {
            email,
            password,
        });
        return result;
    } catch (e) {
        console.log(e);
        throw new Error(alert("Please Check your info 😢"));
    }
};

export const getPost = async (page) => {
    try {
        return await axios.get("http://101.101.218.43/posts/all/" + page);
    } catch (e) {
        console.log(e);
        throw new Error(alert("❌ POST ERROR ❌"));
    }
};
