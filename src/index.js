import React from "react";
import ReactDOM from "react-dom/client"; // Use the new React 18 import
import AppRoutes from "./AppRoutes";

const root = ReactDOM.createRoot(document.getElementById("root")); // Create root
root.render(
    <React.StrictMode>
        <AppRoutes />
    </React.StrictMode>
);