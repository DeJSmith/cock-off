import React from "react";
import { useRecoilState } from "recoil";
import { makeItRainState } from "../store";

export const useMakeItRain = () => {
    const [_, setMakeItRain] = useRecoilState(makeItRainState);

    const makeItRain = () => {
        console.log("make it rain");
        setMakeItRain(true);
        setTimeout(() => {
            setMakeItRain(false);
        }, 5000);
    };

    return { makeItRain };
};
