import React, { useState } from "react";
import Cock from "../assets/cock.jpg";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Box,
    Heading,
} from "@chakra-ui/react";
import { CreateContestantForm } from "./createContestant";

export const Logo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p="1rem"
            >
                <Image
                    src={Cock}
                    w="8rem"
                    h="7rem"
                    onDoubleClick={() => setIsOpen(true)}
                />
                <Heading
                    fontWeight={600}
                    fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                    lineHeight={"110%"}
                >
                    2022 Cock Off
                </Heading>
            </Box>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create New Contestant</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <CreateContestantForm
                            onClose={() => setIsOpen(false)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            variant="ghost"
                            onClick={() => setIsOpen(false)}
                        >
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
