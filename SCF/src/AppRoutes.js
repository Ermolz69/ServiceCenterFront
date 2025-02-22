import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./App";
import Catalog from "./components/Catalog/Catalog";
import About from "./components/About us/About";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* Default Route should be path="/" */}
                <Route path="/" element={<Main />} />
                <Route path="/catalog" element={<Catalog />} />

                {/* Redirect any unknown routes to Main */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;