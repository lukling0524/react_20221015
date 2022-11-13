import styled, { css, keyframes } from "styled-components";

export const Motion = keyframes`
    0%{
        transform: translateY(12px);
    }
    40%{
        transform: translateY(-10px);
    }
    55%{
        transform: translateY(8px);
    }
    70%{
        transform: translateY(-5px);
    }
    80%{
        transform: translateY(4px);
    }
    90%{
        transform: translateY(-3px);
    }
    92%{
        transform: translateY(2px);
    }
    94%{
        transform: translateY(-1px);
    }
    100%{
        transform: translateY(0px);
    }
`;

export const Emoji = styled.div`
    display: inline-block;
`;

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
    overflow: hidden;

    &:hover {
        /* opacity: 0.8; */

        ${Emoji} {
            animation: ${Motion};
            animation-duration: 0.6s;
        }
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
    background-color: #bf1a1a;
`;

export const Blue = styled(Button)`
    background-color: blue;
`;
