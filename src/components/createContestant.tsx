import React from "react";
import { FormControl, FormLabel, Input, Stack, Button } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useContestantActions } from "../actions/contestantActions";

type Props = {
    onClose: () => void;
};

export const CreateContestantForm: React.FC<Props> = ({ onClose }) => {
    const { addNewContestant } = useContestantActions();
    const [name, setName] = React.useState("");
    const [beverage, setBeverage] = React.useState("");

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleBeverageChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setBeverage(event.target.value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addNewContestant({
            name,
            beverage,
            overallRating: 0,
            ratings: [],
            creativityRating: 0,
            tasteRating: 0,
            visualRating: 0,
            dangerRating: 0,
            id: nanoid(),
        });
        onClose();
    };

    return (
        <form onSubmit={onSubmit}>
            <Stack spacing={4}>
                <FormControl>
                    <FormLabel htmlFor="name">Name</FormLabel>
                    <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="beverage">Beverage</FormLabel>
                    <Input
                        id="beverage"
                        type="text"
                        value={beverage}
                        onChange={handleBeverageChange}
                    />
                </FormControl>
                <Button type="submit">Submit</Button>
            </Stack>
        </form>
    );
};
