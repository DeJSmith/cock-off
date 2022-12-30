import React from "react";
import { FormControl, FormLabel, Button, Alert } from "@chakra-ui/react";
import { Contestant } from "../types";
import { RatingSlider } from "./slider";
import { useContestantActions } from "../actions/contestantActions";
import { nanoid } from "nanoid";
import { useMakeItRain } from "../hooks/makeItRain";
import { useDevice } from "../hooks/device";
import { TemporaryAlert } from "./alert";

interface FormProps {
    contestant: Contestant;
    clear: () => void;
}

export const RatingForm: React.FC<FormProps> = ({ contestant, clear }) => {
    const [visualRating, setVisualRating] = React.useState(0);
    const [tasteRating, setTasteRating] = React.useState(0);
    const [dangerRating, setDangerRating] = React.useState(0);
    const [err, setErr] = React.useState(false);
    const [creativityRating, setCreativityRating] = React.useState(0);
    const { addContestantRating } = useContestantActions();
    const { makeItRain } = useMakeItRain();
    const { deviceId } = useDevice();

    const handleVisualRatingChange = (value: number) => {
        setVisualRating(value);
    };

    const handleTasteRatingChange = (value: number) => {
        setTasteRating(value);
    };

    const handleCreativityRatingChange = (value: number) => {
        setCreativityRating(value);
    };

    const handleDangerRatingChange = (value: number) => {
        setDangerRating(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const canSubmit =
            contestant.ratings.findIndex((r) => r.deviceId === deviceId) === -1;
        if (!canSubmit) {
            setErr(true);
            return;
        }
        makeItRain();
        const overallRating =
            (visualRating + tasteRating + creativityRating) / 3;
        addContestantRating(contestant, {
            overallRating,
            visualRating,
            tasteRating,
            creativityRating,
            dangerRating,
            id: nanoid(),
            deviceId,
        });
        clear();
    };

    return (
        <>
            <TemporaryAlert
                isOpen={err}
                onClose={() => setErr(false)}
                message="Sorry champ you can't vote more than once per person 😝"
            />
            <form onSubmit={(e) => onSubmit(e)}>
                <FormControl>
                    <FormLabel htmlFor="visual-rating">
                        Visual Rating: {visualRating}
                    </FormLabel>
                    <RatingSlider
                        id="visual-rating"
                        min={0}
                        max={10}
                        value={visualRating}
                        onChange={handleVisualRatingChange}
                        mb={6}
                        colorScheme="pink"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="taste-rating">
                        Taste Rating: {tasteRating}
                    </FormLabel>
                    <RatingSlider
                        id="taste-rating"
                        min={0}
                        max={10}
                        value={tasteRating}
                        onChange={handleTasteRatingChange}
                        mb={6}
                        colorScheme="pink"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="creativity-rating">
                        Creativity Rating: {creativityRating}
                    </FormLabel>
                    <RatingSlider
                        id="creativity-rating"
                        min={0}
                        max={10}
                        value={creativityRating}
                        onChange={handleCreativityRatingChange}
                        mb={6}
                        colorScheme="pink"
                    />
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="visual-rating">
                        Danger Rating: {dangerRating}
                    </FormLabel>
                    <RatingSlider
                        id="visual-rating"
                        min={0}
                        max={10}
                        value={dangerRating}
                        onChange={handleDangerRatingChange}
                        mb={6}
                        colorScheme="pink"
                    />
                </FormControl>
                <Button type="submit" colorScheme="pink">
                    Submit Rating
                </Button>
            </form>
        </>
    );
};
