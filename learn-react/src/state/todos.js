import { atom } from "recoil";

export const todoState = atom({
    key: "todoState",
    default: [{ id: 1, text: "recoil test", done: false }],
});
