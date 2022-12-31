import React, { useState } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Logo } from "../components/logo";
import { ContestantCard } from "../components/contestantCard";
import { ContestantModal } from "../components/contestantModal";
import { Contestant } from "../types";
import { useContestants } from "../hooks/useContestants";
import { ConfettiRain } from "../components/confetti";
import { EmojiSpinner } from "../components/spinner";

export const Home: React.FC = () => {
    const { contestants, loading } = useContestants();
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState<null | Contestant>(null);

    const selectContestant = (contestant: Contestant) => {
        setSelected(contestant);
        setIsOpen(true);
    };

    const clear = () => {
        setSelected(null);
        setIsOpen(false);
    };

    return (
        <>
            <ConfettiRain />

            <Container maxW={"3xl"}>
                <Logo />
                {loading && <EmojiSpinner />}
                {!loading && (
                    <>
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            justifyContent="space-between"
                            p="1rem"
                            w={"full"}
                        >
                            <Box
                                display="flex"
                                flexDirection="row"
                                alignItems="center"
                                w="300px"
                            >
                                <Text
                                    w={[50, 100]}
                                    fontSize={["0.8rem", "1rem"]}
                                    fontWeight="bold"
                                    mr="1rem"
                                >
                                    Rank
                                </Text>
                                <Text
                                    w={[50, 100]}
                                    fontSize={["0.8rem", "1rem"]}
                                    fontWeight="bold"
                                    mr="1rem"
                                >
                                    Name
                                </Text>
                                <Text
                                    w={[100, 200]}
                                    fontSize={["0.8rem", "1rem"]}
                                    fontWeight="bold"
                                    mr="1rem"
                                >
                                    Beverage
                                </Text>
                            </Box>
                            <Text
                                w={"auto"}
                                mr="3rem"
                                fontSize={["0.8rem", "1rem"]}
                                fontWeight="bold"
                            >
                                Score
                            </Text>
                        </Box>
                        {contestants.length === 0 && (
                            <Box>There are no contestants</Box>
                        )}
                        <Box pt="2rem" display="flex" flexDirection="column">
                            {contestants.map((c, i) => (
                                <ContestantCard
                                    setSelectContestant={selectContestant}
                                    key={i}
                                    index={i}
                                    contestant={c}
                                />
                            ))}
                        </Box>
                        {!!selected && (
                            <ContestantModal
                                contestant={selected}
                                isOpen={isOpen}
                                onClose={() => setIsOpen(false)}
                                clear={clear}
                            />
                        )}
                    </>
                )}
            </Container>
        </>
    );
};
