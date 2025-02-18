import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About us/About";



function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>

    );
}

export default App;
