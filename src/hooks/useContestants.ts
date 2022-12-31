import React, { useEffect } from "react";
import { getContestants } from "../database/contestant";
import { useRecoilState } from "recoil";
import { contestantsState } from "../store";

export const useContestants = () => {
    const [contestants, setContestants] = useRecoilState(contestantsState);

    // refetch the contestants every 60 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setContestants({ ...contestants, stale: true });
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        const fetchContestants = async () => {
            setContestants({ ...contestants, loading: true });
            const fetchedContestants = await getContestants();
            if (fetchedContestants.length > 0) {
                setContestants({
                    stale: false,
                    loading: false,
                    contestants: fetchedContestants,
                    count: fetchedContestants.length,
                });
            }
        };

        if (!contestants.loading || contestants.stale) {
            fetchContestants();
        }
    }, [contestants.stale]);

    return {
        contestants: [...contestants.contestants].sort(
            (a, b) => b.overallRating - a.overallRating
        ),
        loading: contestants.loading,
        count: contestants.count,
    };
};
