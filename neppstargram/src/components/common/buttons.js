import styled, { css } from "styled-components";

export const Button = styled.button`
    width: 100%;
    padding: 12px 10px;
    color: #fff;
    border-radius: var(--borderRadius);
    background-color: #333;
    outline: 0;
    border: 0;
    cursor: pointer;
    transition: 0.25s;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        cursor: default;
        background-color: #ddd !important;
    }

    & + & {
        margin-top: var(--space);
    }

    ${({ disabled }) =>
        disabled &&
        css`
            background-color: #ddd !important;
        `}
`;

export const RedButton = styled(Button)`
    background-color: #d93838;
`;

export const Blue = styled(Button)`
    background-color: blue;
`;
