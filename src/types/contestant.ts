import { Rating } from "./rating";

export type Contestant = {
    name: string;
    beverage: string;
    overallRating: number;
    tasteRating: number;
    visualRating: number;
    creativityRating: number;
    dangerRating: number;
    ratings: Rating[];
    id: string;
};
