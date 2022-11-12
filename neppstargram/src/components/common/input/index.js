import styled from "styled-components";

export const Input = styled.input`
    width: 100%;
    padding: 10px 16px;
    outline: 0;
    border: 1px solid #ddd;
    border-radius: var(--borderRadius);
    transition: border-color 0.25s;

    & + & {
        margin-top: var(--space);
    }

    &:focus {
        border-color: #555;
    }
`;
