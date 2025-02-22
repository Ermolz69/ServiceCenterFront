import React, { useState } from "react";
import { createReport } from "../../services/reportService";
import FloatingLabelInput from "./FloatingLabelInput";
import "./Repair.css";

const Repair = () => {
    const [successMessage, setSuccessMessage] = useState("");

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const reportData = {
            name: fullName,
            phone,
            email,
            deviceType: category,
            problemDescription: description,
            status: 0,
            createdAt: new Date().toISOString()
        };
        try {
            await createReport(reportData);
            setSuccessMessage("Report has been created successfully!");
            setFullName("");
            setPhone("");
            setEmail("");
            setCategory("");
            setDescription("");
            setTimeout(() => {
                setSuccessMessage("");
            }, 3000);
        } catch (error) {
            console.error("Error creating report:", error);
            alert("Failed to create report.");
        }
    };

    return (
        <div className="container">
            {successMessage && (
                <div className="toast-success">
                    <span>{successMessage}</span>
                    <button className="toast-close" onClick={() => setSuccessMessage("")}>
                        &times;
                    </button>
                </div>
            )}

            <div className="text-container">
                <h1 className="title">Creation of a repair request</h1>
                <p className="description">
                    Have questions about repairs or maintenance? We're always here to help!
                    Contact our friendly team 24/7 and get a consultation in just a few minutes.
                </p>
            </div>

            <form className="input-container" onSubmit={handleSubmit}>
                <FloatingLabelInput
                    label="Fullname"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <FloatingLabelInput
                    label="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <FloatingLabelInput
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="input-box">
                    <label className="standard-label" htmlFor="categorySelect">
                        Category
                    </label>
                    <select
                        id="categorySelect"
                        className="standard-input"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="" disabled hidden>
                            -- Choose Category --
                        </option>
                        <option value="Monitors">Monitors</option>
                        <option value="Printers">Printers</option>
                        <option value="PCs">PCs</option>
                        <option value="Cartridges">Cartridges</option>
                    </select>
                </div>

                <div className="input-box">
                    <label className="standard-label" htmlFor="description">
                        Describe your issue
                    </label>
                    <textarea
                        id="description"
                        className="standard-input"
                        rows={5}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button type="submit" className="submit-button">
                    Send request
                </button>
            </form>
        </div>
    );
};

export default Repair;
