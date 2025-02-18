import React from 'react';
import './About.css';

const About = () => {
    const teamMembers = [
        {
            name: 'John Peterson',
            title: 'Senior Repair Technician',
            description: 'With over a decade of experience, John excels in diagnosing and repairing complex hardware issues, ensuring top-quality service while mentoring junior technicians.',
            className: 'Profile1',
        },
        {
            name: 'Sarah Mitchell',
            title: 'Lead Customer Service Representative',
            description: 'Sarah is the welcoming face of our company, providing expert assistance and ensuring a seamless experience for every customer.',
            className: 'Profile2',
        },
        {
            name: 'David Li',
            title: 'Sales Consultant & Product Specialist',
            description: 'David’s extensive product knowledge helps customers find the perfect device, offering tailored recommendations based on their needs.',
            className: 'Profile3',
        },
        {
            name: 'Emily Johnson',
            title: 'IT Solutions Expert',
            description: 'Emily specializes in network security, cloud management, and IT optimization, providing essential support for businesses and individuals.',
            className: 'Profile4',
        },
        {
            name: 'James Carter',
            title: 'Quality Control Specialist',
            description: 'James meticulously inspects every repaired device and new product, ensuring they meet our high standards before reaching the customer.',
            className: 'Profile5',
        },
        {
            name: 'Maria Gonzales',
            title: 'Operations Manager',
            description: 'Maria oversees logistics, inventory, and workflow, ensuring our team operates efficiently and delivers outstanding service.',
            className: 'Profile6',
        },
    ];

    return (
        <div className="about-container">
            <section className="hero-section">
                <div className="headDiv">
                    <div className="headText">
                        <p>
                            Welcome to our full-service Sales and Repair Center, where innovation meets reliability. We pride ourselves on being a one-stop destination for all your technical needs, providing not just high-quality products from leading global brands, but also offering expert repair and maintenance services for a wide range of devices. Our goal is to simplify your life by delivering fast, efficient, and customer-focused solutions – all under one roof.
                        </p>
                    </div>
                    <div className="imageContainer"></div>
                </div>
            </section>

            <section className="team-section">
                <div className="imageContainer2"></div>
                <div className="DivText1">
                    Our team is composed of highly skilled technicians, experienced sales consultants, and dedicated customer service representatives who share a common passion for technology and problem-solving. We take pride in our ability to stay ahead of industry trends, continuously updating our knowledge and skill set to provide the best possible service. We believe that a collaborative approach is crucial to success, and each member of our staff plays a vital role in ensuring our customers receive top-tier products and solutions.
                </div>

                {teamMembers.map((member, index) => (
                    <div key={index} className={member.className}>
                        <div className={`${member.className}c1`}>
                            {member.name} – {member.title}
                        </div>
                        <div className={`${member.className}c2`}>
                            {member.description}
                        </div>
                        <div className={`${member.className}Image`}></div>
                    </div>
                ))}
            </section>

            <section className="story-section">
                <h2 className="Story">Our Story</h2>
                <div className="StoryText">
                    Founded by a group of passionate specialists who recognized the growing need for trustworthy and comprehensive technical support, our company has grown into a reputable service center that caters to individuals, businesses, and organizations. Over the years, we have established strong relationships with major manufacturers and distributors, ensuring that every product we sell is both authentic and backed by reliable warranties.
                </div>
            </section>

            <section className="offer-section">
                <h2 className="OfferHeader">What We Offer</h2>
                <div className="Offer">
                    <div className="OfferText">
                        Extensive Product Catalog We carry an array of devices – from the latest smartphones and laptops to advanced office equipment and accessories. Our selection is carefully curated to include only the most reputable and sought-after brands, ensuring that you have access to cutting-edge technology that meets your specific requirements. Whether you're searching for the latest gaming laptop, a reliable home appliance, or specialized office equipment, our team is here to help you find the perfect match.
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
