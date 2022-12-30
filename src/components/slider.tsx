import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Box,
    SliderProps,
} from "@chakra-ui/react";
import React from "react";
import { emojis } from "../constants";

export const RatingSlider: React.FC<SliderProps> = (props) => {
    return (
        <Slider {...props}>
            <SliderTrack>
                <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb>
                <Box color="tomato">{emojis[props.value || 0]}</Box>
            </SliderThumb>
        </Slider>
    );
};
