import { db } from "../utils/firebase";
import { doc, setDoc, query, collection, onSnapshot } from "firebase/firestore";
import { Contestant } from "../types/contestant";
import { Rating } from "../types";
import { isNaN } from "lodash";

const calculateRatings = (contestant: Contestant): Contestant => {
    const { ratings } = contestant;
    console.log(ratings);
    const overallRating =
        ratings.reduce((acc, rating) => acc + rating.overallRating, 0) /
        ratings.length;
    const tasteRating =
        ratings.reduce((acc, rating) => acc + rating.tasteRating, 0) /
        ratings.length;
    const visualRating =
        ratings.reduce((acc, rating) => acc + rating.visualRating, 0) /
        ratings.length;
    const creativityRating =
        ratings.reduce((acc, rating) => acc + rating.creativityRating, 0) /
        ratings.length;
    const dangerRating =
        ratings.reduce((acc, rating) => acc + rating.dangerRating, 0) /
        ratings.length;

    return {
        ...contestant,
        overallRating: isNaN(overallRating) ? 0 : overallRating,
        tasteRating: isNaN(tasteRating) ? 0 : tasteRating,
        visualRating: isNaN(visualRating) ? 0 : visualRating,
        creativityRating: isNaN(creativityRating) ? 0 : creativityRating,
        dangerRating: isNaN(dangerRating) ? 0 : dangerRating,
    };
};

export const getContestants = async (): Promise<Contestant[]> => {
    const ref = query(collection(db, "Contestant"));
    return new Promise((resolve) =>
        onSnapshot(ref, (querySnapshot) => {
            const data: Contestant[] = [];
            querySnapshot.docs.forEach((doc) => {
                const d = doc.data();
                data.push(d as Contestant);
            });
            resolve(data.map((c) => calculateRatings(c) as Contestant));
        })
    );
};

export const getContestant = async (
    name: string
): Promise<Contestant | undefined> => {
    const contestants = await getContestants();
    const contestant = contestants.find(
        (contestant) => contestant.name === name
    );

    return contestant;
};

export const addContestant = async (contestant: Contestant): Promise<void> => {
    await setDoc(doc(db, "Contestant", contestant.id), contestant);
};

export const updateContestant = async (
    contestant: Contestant
): Promise<void> => {
    console.log("updateContestant", contestant);
    await setDoc(doc(db, "Contestant", contestant.id), contestant);
};

export const addRating = async (
    contestant: Contestant,
    rating: Rating
): Promise<void> => {
    const contestants = await getContestants();
    let fetchedContestant = contestants.find(
        (c) => c.id === contestant.id
    ) as Contestant;

    if (!fetchedContestant) return;

    const newContestant = {
        ...fetchedContestant,
        ratings: [...fetchedContestant.ratings, rating],
    };
    console.log(calculateRatings(newContestant));
    await updateContestant(calculateRatings(newContestant));
};
