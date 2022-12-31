import { db } from "../utils/firebase";
import { doc, setDoc, query, collection, onSnapshot } from "firebase/firestore";
import { Contestant } from "../types/contestant";
import { Rating } from "../types";

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
        overallRating,
        tasteRating,
        visualRating,
        creativityRating,
        dangerRating,
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
    let newContestant = contestants.find(
        (c) => c.id === contestant.id
    ) as Contestant;

    if (!newContestant) return;

    newContestant = {
        ...newContestant,
        ratings: [...newContestant.ratings, rating],
    };
    console.log(calculateRatings(newContestant));
    await updateContestant(calculateRatings(newContestant));
};
