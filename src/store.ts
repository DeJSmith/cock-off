import { atom, selector } from "recoil";
import { Contestant } from "./types";

type ContestantsState = {
    count: number;
    contestants: Contestant[];
    loading: boolean;
    stale: boolean;
};

export const contestantsState = atom<ContestantsState>({
    key: "contestantState",
    default: {
        count: 0,
        contestants: [],
        loading: false,
        stale: false,
    },
});

export const contestantSelector = selector<Contestant[]>({
    key: "filteredContestants",
    get: ({ get }) => {
        const { contestants } = get(contestantsState);
        return contestants.sort((a, b) => a.overallRating - b.overallRating);
    },
});

export const makeItRainState = atom({
    key: "raining",
    default: false,
});
