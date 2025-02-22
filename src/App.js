import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About us/About";
import Contacts from "./components/Contacts/Contacts";
import Repair from "./components/Repair/Repair";
import Cart from "./components/Shopping cart/Cart";



function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:id" element={<Catalog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/repair" element={<Repair />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>

        </Router>

    );
}

export default App;
