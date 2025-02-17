import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import NavBar from "../NavBar/NavBar";


const Home = () => {
    return (
        <div>
            <section className="home-container">
            <div className="home-content">
                <h1>
                    We sell and repair, and most <br />
                    importantly, <strong>we deliver quality.</strong>
                </h1>
                <div className="home-buttons">
                    <Link to="/catalog" className="btn">Buy now</Link>
                    <Link to="/repair" className="btn">Repair</Link>
                </div>
            </div>
            <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/Assets/image1.webp`} alt="Laptop" className="laptop-image" />
                <img src={`${process.env.PUBLIC_URL}/Assets/image2.webp`} alt="PC" className="pc-image" />
            </div>
        </section>
        </div>
    );
};

export default Home;
