import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About us/About";
import Contact from "./components/Contacts/Contacts"
import Repair from "./components/Repair/Repair";



function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contact />} />
                <Route path="/repair" element = {<Repair />} />
            </Routes>
        </Router>

    );
}

export default App;
