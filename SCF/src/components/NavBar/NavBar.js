import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        setMenuOpen(false);
        navigate(path);
    };

    // Закрываем меню при изменении маршрута
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <nav className="nav-bar">
            <div className="logo">
                <h2>Service Center</h2>
            </div>

            <div className="burger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li><span className={location.pathname === "/" ? "active" : ""} onClick={() => handleNavigation("/")}>Home</span></li>
                <li><span className={location.pathname === "/catalog" ? "active" : ""} onClick={() => handleNavigation("/catalog")}>Catalog</span></li>
                <li><span className={location.pathname === "/about" ? "active" : ""} onClick={() => handleNavigation("/about")}>About us</span></li>
                <li><span className={location.pathname === "/contacts" ? "active" : ""} onClick={() => handleNavigation("/contacts")}>Contacts</span></li>
                <li><span className={location.pathname === "/repair" ? "active" : ""} onClick={() => handleNavigation("/repair")}>Repair</span></li>
            </ul>

            <div className="nav-actions">
                <img
                    src={`${process.env.PUBLIC_URL}/Assets/shopping-cart.svg`}
                    alt="Shopping Cart"
                    className="shopping-cart"
                />
            </div>
        </nav>
    );
};

export default NavBar;
