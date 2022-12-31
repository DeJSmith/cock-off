import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Rating } from "../types";
import { ScoreTable } from "./scoreTable";

type Props = {
    ratings: Rating[];
};

export const Ratings: React.FC<Props> = ({ ratings }) => {
    return (
        <Box>
            <Heading size="md">Ratings</Heading>
            <br />
            {ratings.length === 0 && <p>No ratings yet</p>}
            {ratings.length > 0 && <ScoreTable scores={ratings} />}
        </Box>
    );
};
