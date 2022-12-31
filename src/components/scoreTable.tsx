import {
    Table,
    Tbody,
    Tr,
    Thead,
    Th,
    Td,
    TableContainer,
} from "@chakra-ui/react";
import React from "react";
import { Rating } from "../types";
import { round } from "../utils/tools";

type Props = {
    scores: Rating[];
};

export const ScoreTable: React.FC<Props> = ({ scores }) => {
    return (
        <TableContainer maxHeight="250px" overflowY="scroll">
            <Table variant="striped" colorScheme="pink">
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Visual</Th>
                        <Th>Taste</Th>
                        <Th>Creativity</Th>
                        <Th>Danger</Th>
                        <Th>Overall</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {scores.map((s, i) => (
                        <Tr key={s.id}>
                            <Td fontWeight="bold">{i + 1}</Td>
                            <Td>{round(s.visualRating)}</Td>
                            <Td>{round(s.tasteRating)}</Td>
                            <Td>{round(s.creativityRating)}</Td>
                            <Td>{round(s.dangerRating)}</Td>
                            <Td>{round(s.overallRating)}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
};
