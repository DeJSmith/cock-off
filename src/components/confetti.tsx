import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { makeItRainState } from "../store";
import "./ConfettiRain.css";

const rain = ["🍆", "🫄", "🫃🏿", "💩", "🤡", "🤖"];

export const ConfettiRain: React.FC = () => {
    const [confetti, setConfetti] = useState<any[]>([]);
    const isRaining = useRecoilValue(makeItRainState);

    useEffect(() => {
        if (!isRaining) {
            setConfetti([]);
        }
        if (isRaining) {
            const interval = setInterval(() => {
                setConfetti((prevConfetti) => [
                    ...prevConfetti,
                    <div
                        className="confetti"
                        key={prevConfetti.length}
                        style={{
                            top: Math.random() * window.innerHeight,
                            left: Math.random() * window.innerWidth,
                            transform: `rotate(${Math.random() * 360}deg)`,
                            width: `15px`,
                            height: `15px`,
                            position: "absolute",
                            borderRadius: "50%",
                            zIndex: 1000,
                        }}
                    >
                        {rain[Math.floor(Math.random() * rain.length)]}
                    </div>,
                ]);
            }, 10);
            return () => clearInterval(interval);
        }
    }, [isRaining]);

    return <div>{isRaining && confetti}</div>;
};

export default ConfettiRain;
