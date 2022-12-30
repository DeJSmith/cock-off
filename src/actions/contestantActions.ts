import React from "react";
import { useRecoilState } from "recoil";
import { addContestant, addRating } from "../database/contestant";
import { contestantsState } from "../store";
import { Contestant, Rating } from "../types";

export const useContestantActions = () => {
    const [contestants, setContestants] = useRecoilState(contestantsState);

    const addNewContestant = async (contestant: Contestant) => {
        setContestants({ ...contestants, loading: true });
        await addContestant(contestant);
        setContestants({
            stale: true,
            loading: false,
            contestants: [...contestants.contestants, contestant],
            count: contestants.count + 1,
        });
    };

    const addContestantRating = async (
        contestant: Contestant,
        rating: Rating
    ) => {
        setContestants({ ...contestants, loading: true });
        await addRating(contestant, rating);
        setContestants({
            stale: true,
            loading: false,
            contestants: [...contestants.contestants, contestant],
            count: contestants.count + 1,
        });
    };

    return { addNewContestant, addContestantRating };
};
