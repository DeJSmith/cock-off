import { Contestant } from "../types";

export function round(num: number) {
    return Math.round(num);
}

export function calculateOverallScore(contestant: Contestant) {
    const { dangerRating, tasteRating, creativityRating, visualRating } =
        contestant;
    return round(
        (dangerRating + tasteRating + creativityRating + visualRating) / 4
    );
}
