import { Badge } from "@chakra-ui/react";
import React from "react";
import { Contestant } from "../types";
import { emojis, colorSchemes } from "../constants";

type Props = {
    contestant: Contestant;
};

export const ContestantBadge: React.FC<Props> = ({ contestant }) => {
    const color = colorSchemes[Math.round(contestant.overallRating)];
    const emoji = emojis[Math.round(contestant.overallRating)];
    return (
        <Badge fontSize="1rem" colorScheme={color}>
            {emoji} {contestant.name} - {Math.round(contestant.overallRating)} /
            10
        </Badge>
    );
};
