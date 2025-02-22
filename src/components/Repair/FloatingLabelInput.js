import React, { useState } from "react";
import "./FloatingLabelInput.css";

const FloatingLabelInput = ({ label, value, onChange }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="input-box">
            <input
                type="text"
                className="floating-input"
                value={value}
                onChange={onChange}
                onFocus={() => setIsFocused(true)}
                onBlur={(e) => setIsFocused(e.target.value !== "")}
            />
            <label className={`floating-label ${isFocused || value ? "active" : ""}`}>
                {label}
            </label>
        </div>
    );
};

export default FloatingLabelInput;
