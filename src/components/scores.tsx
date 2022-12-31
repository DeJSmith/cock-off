import { Stack, StackDivider, Box } from "@chakra-ui/react";
import React from "react";
import { Contestant } from "../types";
import { RatingLabel } from "./ratingLabel";
import { Ratings } from "./ratings";

type Props = {
    contestant: Contestant;
};

export const Scores: React.FC<Props> = ({ contestant }) => {
    return (
        <Stack divider={<StackDivider />} spacing="4">
            <RatingLabel
                label="Average Visual Rating"
                score={contestant.visualRating}
            />
            <RatingLabel
                label="Average Taste Rating"
                score={contestant.tasteRating}
            />
            <RatingLabel
                label="Average Danger Rating"
                score={contestant.dangerRating}
            />
            <RatingLabel
                label="Average Creativity Rating"
                score={contestant.creativityRating}
            />
            <Box>
                <Ratings ratings={contestant.ratings} />
            </Box>
        </Stack>
    );
};
