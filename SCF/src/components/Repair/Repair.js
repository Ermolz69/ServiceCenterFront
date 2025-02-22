import React from 'react';
import "./Repair.css";

const Repair = () => {
    return (
        <div>
            <h1 className='RepairHeader'>Creation of a repair request</h1>
            <p className='RepairAbout'>Have questions about repairs or maintenance? We're always here to help! Contact our friendly team 24/7 and get a consultation in just a few minutes.</p>

            <div className='RepairRequest'>
                <input type="text" placeholder="Fullname" className='RepairInput' />
            </div>
        </div>
    );
};

export default Repair;