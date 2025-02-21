import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";


const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <section className="home-container">
            <div className="home-content">
                <h1>
                    We sell and repair, and most <br />
                    importantly, we deliver quality.
                </h1>
                <div className="home-buttons">
                    <button className="btn" onClick={() => navigate("/catalog")}>Buy now</button>
                    <button className="btn" onClick={() => navigate("/repair")}>Repair</button>
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
