import { Box } from "@chakra-ui/react";
import "./ConfettiRain.css";

export const EmojiSpinner = () => (
    <Box display="flex" w="100%" alignItems="center" justifyContent="center">
        <Box
            w="50px"
            h="50px"
            fontSize="3rem"
            animation="rotate 1s linear infinite;"
            className="spinner"
        >
            🍆
        </Box>
    </Box>
);
