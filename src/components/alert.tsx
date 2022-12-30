import React, { useEffect } from "react";
import { Alert, useDisclosure } from "@chakra-ui/react";

type Props = {
    message: string;
    isOpen: boolean;
    onClose: () => void;
};

export const TemporaryAlert: React.FC<Props> = ({
    message,
    isOpen,
    onClose,
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div style={{ marginBottom: "1rem" }}>
            {isOpen && <Alert status="error">{message}</Alert>}
        </div>
    );
};
