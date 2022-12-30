import React from "react";
import { Contestant } from "../types/contestant";
import { Box, Text } from "@chakra-ui/react";
import { RatingLabel } from "./ratingLabel";

type Props = {
    contestant: Contestant;
    index: number;
    setSelectContestant: (contestant: Contestant) => void;
};

export const ContestantCard: React.FC<Props> = ({
    contestant,
    index,
    setSelectContestant,
}) => {
    return (
        <Box
            backgroundColor={"gray.200"}
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            p="1rem"
            boxShadow={"lg"}
            w={"full"}
            marginBottom="1rem"
            borderRadius={"md"}
            _hover={{
                transform: "scale(1.03)",
                boxShadow: "xl",
                cursor: "pointer",
                transition: "all 0.5s",
            }}
            onClick={() => setSelectContestant(contestant)}
        >
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                w="300px"
            >
                <Text w={[50, 100]} fontSize={["0.8rem", "1rem"]} mr="1rem">
                    {index + 1}
                </Text>
                <Text w={[50, 100]} fontSize={["0.8rem", "1rem"]} mr="1rem">
                    {contestant.name}
                </Text>
                <Text w={[100, 200]} fontSize={["0.8rem", "1rem"]} mr="1rem">
                    {contestant.beverage}
                </Text>
            </Box>
            <RatingLabel score={contestant.overallRating} label="" w="100px" />
        </Box>
    );
};
