import React from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from "@chakra-ui/react";
import { Contestant } from "../types";
import { RatingForm } from "./ratingForm";
import { Scores } from "./scores";
import { ContestantBadge } from "./contestantBadge";
import { Ratings } from "./ratings";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    contestant: Contestant;
    clear: () => void;
};

export const ContestantModal: React.FC<Props> = ({
    isOpen,
    onClose,
    contestant,
    clear,
}) => {
    const [_, setActiveTab] = React.useState("form");

    const handleTabChange = (index: number) => {
        const tab = index === 0 ? "form" : "items";
        setActiveTab(tab);
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={() => onClose()} size="2xl">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        <ContestantBadge contestant={contestant} />
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Tabs onChange={handleTabChange} colorScheme="pink">
                            <TabList>
                                <Tab>Scores</Tab>
                                <Tab>Vote</Tab>
                            </TabList>
                            <TabPanels>
                                <TabPanel>
                                    <Scores contestant={contestant} />
                                </TabPanel>
                                <TabPanel>
                                    <RatingForm
                                        clear={clear}
                                        contestant={contestant}
                                    />
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};
