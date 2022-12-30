import React from "react";
import { useDevice } from "./hooks/device";
import { Home } from "./pages/home";

function App() {
    const { deviceId } = useDevice();
    console.log(deviceId);
    return <Home></Home>;
}

export default App;
