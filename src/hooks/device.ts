import React from "react";
import { nanoid } from "nanoid";
import { isEmpty } from "lodash";

export const useDevice = () => {
    const [deviceId, _] = React.useState<string>(() => {
        const existingId = localStorage.getItem("device");
        if (isEmpty(existingId) || !existingId) {
            const id = nanoid();
            localStorage.setItem("device", id);
            return id;
        } else {
            return existingId;
        }
    });

    return { deviceId };
};
