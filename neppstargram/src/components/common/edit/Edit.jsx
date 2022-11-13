import { useState } from "react";
import { PostEdit } from "../../../api";
import SmoothMotion from "../SmoothMotion";
import UploadImage from "./UploadImage";

function Edit() {
    const [inputs, setInputs] = useState({
        body: "",
        images: {},
    });

    const onChangeImages = (files) => {
        setInputs({
            ...inputs,
            images: files,
        });
    };

    const handleInput = (e) => {
        setInputs({
            ...inputs,
            body: e.target.value,
        });
    };

    const handleSubmit = () => {
        const form = new FormData();

        for (let i = 0; i < inputs.images.length; i++) {
            form.append("images", inputs.images[i]);
        }

        form.append("body", inputs.body);
        PostEdit(inputs.body, form).then((res) => console.log(res));
    };

    return (
        <SmoothMotion>
            <UploadImage onChangeImages={onChangeImages} />
            <input type="text" onChange={handleInput} />
            <button onClick={handleSubmit}>등록</button>
        </SmoothMotion>
    );
}

export default Edit;
