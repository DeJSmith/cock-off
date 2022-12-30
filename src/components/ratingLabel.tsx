import React from "react";
import { Heading, Tag, Box, Text, BoxProps } from "@chakra-ui/react";
import { emojis, colorSchemes } from "../constants";

interface Props extends BoxProps {
    score: number;
    label: string;
}

export const RatingLabel: React.FC<Props> = ({ label, score, ...rest }) => {
    const rating = Math.round(score);
    let color = colorSchemes[rating];
    let emoji = emojis[rating];

    return (
        <Box
            alignItems={"center"}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            {...rest}
        >
            {label !== "" && (
                <Heading size="xs" w="50%" textTransform="uppercase">
                    {label}
                </Heading>
            )}
            <Text>{emoji}</Text>
            <Tag colorScheme={color}>{rating} / 10</Tag>
        </Box>
    );
};
