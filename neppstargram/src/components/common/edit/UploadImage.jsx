import { useState } from "react";
import styled, { css } from "styled-components";

function UploadImage({ onChangeImages }) {
    const [previewUrl, setPreviewUrl] = useState("");
    const handleChange = (e) => {
        console.log(e.target.files);
        const reader = new FileReader();

        if (e.target.files[0]) reader.readAsDataURL(e.target.files[0]);

        reader.onload = () => {
            setPreviewUrl(reader.result);
        };

        onChangeImages(e.target.files);
    };

    return (
        <div>
            <Previewbox htmlFor="preview" previewUrl={previewUrl} />
            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleChange}
                id="preview"
                style={{ display: "none" }}
            />
        </div>
    );
}

const Previewbox = styled.label`
    display: block;
    width: 100px;
    height: 100px;
    ${({ previewUrl }) => css`
        background-image: url(${previewUrl});
        background-size: cover;
        background-position: center;
    `}
`;

export default UploadImage;
