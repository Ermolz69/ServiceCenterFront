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

    const offers = [
        {
            title: "1.Extensive Product Catalog",
            description: "We carry an array of devices – from the latest smartphones and laptops to advanced office equipment and accessories. Our selection is carefully curated to include only the most reputable and sought-after brands, ensuring that you have access to cutting-edge technology that meets your specific requirements. Whether you're searching for the latest gaming laptop, a reliable home appliance, or specialized office equipment, our team is here to help you find the perfect match.",
            className: 'Offer'
        },
        {
            title: "2.Expert Repair Services",
            description: "Our skilled technicians specialize in repairing electronic devices with precision and care. We invest in ongoing training and certifications to handle a wide range of technical issues effectively.",
            points: [
                "Hardware Repairs: We fix broken screens, faulty keyboards, and complex motherboard issues using high-quality parts.",
                "Software Solutions: Our experts manage OS installations, data recovery, virus removal, and system optimization.",
                "Preventive Maintenance: Regular check-ups and cleaning help extend device lifespan and prevent future issues."
            ],
            className: 'Offer2'
        },
        {
            title: "3.Customized Support & Consultancy",
            description: "We understand that every client has unique needs. That’s why we provide personalized consultations to recommend the most suitable products and services for your home or business. Our technical experts will assess your situation, address any concerns you may have, and guide you through every step of the decision-making process.",
            className: 'Offer3'
        },
        {
            title: "4.Warranty & After-Sales Support",
            description: "Our commitment to you doesn’t end once you’ve made a purchase or received a repair. We stand behind our products and services by offering comprehensive warranty plans and responsive after-sales support. If you ever have any questions or encounter an issue, our dedicated customer service team is just a call or click away.",
            className: 'Offer4'
        }
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

            <h2 className="OfferHeader">What We Offer</h2>
            <div className="offer-grid">
                {offers.map((offer, index) => (
                    <div key={index} className={offer.className}>
                        <div className={`${offer.className}Text`}>
                            <strong>{offer.title}</strong>
                            <p>{offer.description}</p>
                            {offer.points && (
                                <ul>
                                    {offer.points.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="head2Div">
                <div className="head2Text">
                    <h2>Our Vision & Mission</h2>
                    <p>
                        At the heart of our mission is the desire to be a trusted ally in our clients’ technological journey. By combining top-tier products with world-class repair and maintenance services, we strive to make technology accessible, dependable, and enjoyable for everyone. Our vision is to continue evolving, expanding our range of services, and exploring new technologies to better serve our growing community of customers.
                    </p>
                    <div className="image9Container"></div>
                </div>
            </div>
            <h2 className="Offer2Header">Why Choose Us</h2>

            <div className="choose-grid">
                <div className="ChooseText">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" style={{position:"relative",right:"90px",top:"50px"}}>
                        <g clip-path="url(#clip0_127_2103)">
                            <path d="M3.1248 0.00278992L0 3.12741L6.87456 12.7544C7.16396 13.1598 7.5461 13.4901 7.98911 13.7179C8.43211 13.9456 8.92314 14.0641 9.42127 14.0636H9.64C10.0508 14.0633 10.4577 14.144 10.8373 14.3011C11.217 14.4582 11.5619 14.6886 11.8524 14.9791L20.2112 23.3375L12.0336 31.6302C10.6349 31.2185 9.15954 31.1384 7.72449 31.3962C6.28945 31.654 4.93422 32.2426 3.76632 33.1154C2.59841 33.9882 1.64996 35.1211 0.996196 36.4242C0.342435 37.7274 0.00135054 39.165 0 40.6229C0.0018732 41.9663 0.292493 43.2936 0.852168 44.5149C1.41184 45.7361 2.2275 46.8229 3.24387 47.7014C4.26024 48.5799 5.45359 49.2298 6.74305 49.6068C8.03251 49.9839 9.38797 50.0795 10.7176 49.887C12.0472 49.6945 13.3199 49.2185 14.4495 48.4912C15.579 47.7639 16.5391 46.8023 17.2645 45.6716C17.99 44.5409 18.4639 43.2675 18.6542 41.9377C18.8446 40.6078 18.7468 39.2526 18.3676 37.9638L26.6608 29.7867L29.6856 32.8113L28.7325 35.6672C28.5494 36.2177 28.5231 36.8083 28.6567 37.3729C28.7902 37.9374 29.0783 38.4537 29.4887 38.8637L39.7068 49.0812C39.9963 49.3724 40.3406 49.6035 40.7197 49.7612C41.0988 49.9188 41.5054 50 41.916 50C42.3267 50 42.7332 49.9188 43.1124 49.7612C43.4915 49.6035 43.8357 49.3724 44.1253 49.0812L49.0812 44.1256C49.3724 43.8361 49.6035 43.4919 49.7611 43.1128C49.9188 42.7336 50 42.3271 50 41.9165C50 41.5059 49.9188 41.0993 49.7611 40.7202C49.6035 40.3411 49.3724 39.9969 49.0812 39.7074L38.8631 29.4899C38.453 29.0795 37.9367 28.7914 37.3722 28.6579C36.8076 28.5243 36.2169 28.5506 35.6664 28.7337L32.8104 29.6867L29.8106 26.6871L38.185 18.4287C39.5743 18.7995 41.0301 18.8464 42.4403 18.5656C43.8506 18.2848 45.1774 17.684 46.3187 16.8094C47.46 15.9347 48.3851 14.8097 49.0228 13.521C49.6605 12.2324 49.9937 10.8145 49.9968 9.37666C49.9968 8.53301 49.8905 7.72373 49.678 6.94883L42.991 13.6386L37.4976 12.5013L36.3601 7.01132L43.0503 0.321502C41.4589 -0.10638 39.7827 -0.107179 38.1908 0.319186C36.5989 0.745551 35.1476 1.58401 33.9831 2.75005C32.8185 3.91609 31.982 5.3685 31.5578 6.96087C31.1336 8.55325 31.1366 10.2293 31.5667 11.8201L23.3172 20.1879L14.9772 11.8545C14.3911 11.2686 14.0618 10.474 14.0616 9.64538V9.42353C14.0616 8.92597 13.9429 8.43558 13.7151 7.99319C13.4874 7.55079 13.1573 7.16917 12.7523 6.88009L3.1248 0.00278992ZM33.2666 33.2675C33.4117 33.122 33.5841 33.0066 33.774 32.9278C33.9638 32.8491 34.1673 32.8085 34.3728 32.8085C34.5783 32.8085 34.7818 32.8491 34.9716 32.9278C35.1614 33.0066 35.3338 33.122 35.479 33.2675L44.5846 42.3758C44.8692 42.6705 45.0267 43.0651 45.0231 43.4747C45.0196 43.8844 44.8553 44.2762 44.5656 44.5659C44.2759 44.8556 43.884 45.0199 43.4744 45.0234C43.0647 45.027 42.6701 44.8695 42.3754 44.5849L33.2666 35.4798C33.1211 35.3346 33.0057 35.1622 32.9269 34.9724C32.8481 34.7826 32.8076 34.5791 32.8076 34.3736C32.8076 34.1682 32.8481 33.9647 32.9269 33.7749C33.0057 33.5851 33.1211 33.4127 33.2666 33.2675ZM9.37439 34.3736L10.8462 35.1298L12.4992 35.211L13.396 36.6015L14.7865 37.4983L14.8678 39.1512L15.624 40.6229L14.8678 42.0946L14.7865 43.7475L13.396 44.6443L12.4992 46.0347L10.8462 46.116L9.37439 46.8721L7.90261 46.116L6.2496 46.0347L5.35278 44.6443L3.96224 43.7475L3.881 42.0946L3.1248 40.6229L3.881 39.1512L3.96224 37.4983L5.35278 36.6015L6.2496 35.211L7.90261 35.1298L9.37439 34.3736Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_127_2103">
                                <rect width="50" height="50" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <strong>Comprehensive Solutions:</strong> We handle everything from the moment you decide to purchase a new device, to installation, maintenance, and any necessary repairs.
                </div>

                <div className="ChooseText">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" style={{position:"relative",right:"90px",top:"50px"}}>
                        <path d="M16.6813 4.96875C13.7048 5.78849 10.7488 6.68042 7.81564 7.64375C7.54761 7.73019 7.30932 7.89034 7.12805 8.10587C6.94678 8.32141 6.82985 8.58362 6.79064 8.8625C5.05939 21.8531 9.05939 31.3313 13.8313 37.575C15.8507 40.2458 18.2599 42.598 20.9781 44.5531C22.0594 45.3156 23.0156 45.8656 23.7688 46.2188C24.1438 46.3958 24.449 46.5187 24.6844 46.5875C24.7882 46.619 24.8935 46.6451 25 46.6656C25.1055 46.645 25.2098 46.6189 25.3125 46.5875C25.55 46.5167 25.8563 46.3937 26.2313 46.2188C26.9813 45.8656 27.9406 45.3125 29.0219 44.5531C31.7401 42.598 34.1493 40.2458 36.1688 37.575C40.9406 31.3344 44.9406 21.8531 43.2094 8.8625C43.1702 8.58362 43.0533 8.32141 42.872 8.10587C42.6907 7.89034 42.4524 7.73019 42.1844 7.64375C40.15 6.97813 36.7156 5.89375 33.3188 4.97187C29.85 4.03125 26.6594 3.33438 25 3.33438C23.3438 3.33438 20.15 4.02813 16.6813 4.96875ZM15.85 1.75C19.2406 0.828125 22.8438 0 25 0C27.1563 0 30.7594 0.828125 34.15 1.75C37.6188 2.6875 41.1156 3.79687 43.1719 4.46875C44.0316 4.75266 44.7938 5.27333 45.3709 5.97094C45.948 6.66855 46.3166 7.51481 46.4344 8.4125C48.2969 22.4031 43.975 32.7719 38.7313 39.6313C36.5068 42.5648 33.8555 45.1486 30.8656 47.2969C29.8329 48.042 28.7371 48.6955 27.5906 49.25C26.7156 49.6625 25.775 50 25 50C24.225 50 23.2875 49.6625 22.4094 49.25C21.263 48.6955 20.1671 48.042 19.1344 47.2969C16.1446 45.1486 13.4933 42.5648 11.2688 39.6313C6.02502 32.7719 1.70314 22.4031 3.56564 8.4125C3.68341 7.51481 4.05203 6.66855 4.62913 5.97094C5.20624 5.27333 5.96843 4.75266 6.82814 4.46875C9.81331 3.49065 12.8215 2.58414 15.85 1.75Z" fill="black"/>
                        <path d="M33.9188 16.0812C34.0643 16.2264 34.1797 16.3988 34.2585 16.5886C34.3373 16.7785 34.3778 16.982 34.3778 17.1875C34.3778 17.393 34.3373 17.5965 34.2585 17.7863C34.1797 17.9762 34.0643 18.1486 33.9188 18.2937L24.5438 27.6687C24.3986 27.8142 24.2262 27.9297 24.0364 28.0085C23.8465 28.0872 23.643 28.1278 23.4375 28.1278C23.232 28.1278 23.0285 28.0872 22.8387 28.0085C22.6488 27.9297 22.4764 27.8142 22.3313 27.6687L17.6438 22.9812C17.4985 22.836 17.3833 22.6635 17.3046 22.4737C17.226 22.2839 17.1855 22.0804 17.1855 21.875C17.1855 21.6695 17.226 21.4661 17.3046 21.2763C17.3833 21.0865 17.4985 20.914 17.6438 20.7687C17.789 20.6235 17.9615 20.5082 18.1513 20.4296C18.3411 20.351 18.5446 20.3105 18.75 20.3105C18.9555 20.3105 19.1589 20.351 19.3487 20.4296C19.5385 20.5082 19.711 20.6235 19.8563 20.7687L23.4375 24.3531L31.7063 16.0812C31.8514 15.9357 32.0238 15.8203 32.2137 15.7415C32.4035 15.6627 32.607 15.6222 32.8125 15.6222C33.018 15.6222 33.2215 15.6627 33.4114 15.7415C33.6012 15.8203 33.7736 15.9357 33.9188 16.0812Z" fill="black"/>
                    </svg>
                    <strong>Quality Assurance:</strong> We strictly use genuine parts for repairs and partner only with reliable manufacturers, so you can trust the products and services we provide.
                </div>

                <div className="ChooseText">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" style={{position:"relative",right:"90px",top:"50px"}}>
                        <path d="M21.875 43.75C21.875 43.75 18.75 43.75 18.75 40.625C18.75 37.5 21.875 28.125 34.375 28.125C46.875 28.125 50 37.5 50 40.625C50 43.75 46.875 43.75 46.875 43.75H21.875ZM34.375 25C36.8614 25 39.246 24.0123 41.0041 22.2541C42.7623 20.496 43.75 18.1114 43.75 15.625C43.75 13.1386 42.7623 10.754 41.0041 8.99587C39.246 7.23772 36.8614 6.25 34.375 6.25C31.8886 6.25 29.504 7.23772 27.7459 8.99587C25.9877 10.754 25 13.1386 25 15.625C25 18.1114 25.9877 20.496 27.7459 22.2541C29.504 24.0123 31.8886 25 34.375 25ZM16.3 43.75C15.837 42.7743 15.6059 41.7048 15.625 40.625C15.625 36.3906 17.75 32.0312 21.675 29C19.7162 28.3951 17.6749 28.0999 15.625 28.125C3.125 28.125 0 37.5 0 40.625C0 43.75 3.125 43.75 3.125 43.75H16.3ZM14.0625 25C16.1345 25 18.1216 24.1769 19.5868 22.7118C21.0519 21.2466 21.875 19.2595 21.875 17.1875C21.875 15.1155 21.0519 13.1284 19.5868 11.6632C18.1216 10.1981 16.1345 9.375 14.0625 9.375C11.9905 9.375 10.0034 10.1981 8.53823 11.6632C7.0731 13.1284 6.25 15.1155 6.25 17.1875C6.25 19.2595 7.0731 21.2466 8.53823 22.7118C10.0034 24.1769 11.9905 25 14.0625 25Z" fill="black"/>
                    </svg>
                    <strong>Customer-Centric Approach:</strong> We tailor our services to meet your unique needs, ensuring a smooth, stress-free experience.
                </div>

                <div className="ChooseText">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" style={{position:"relative",right:"90px",top:"50px"}}>
                        <path d="M6 1.58124C6.24456 1.5414 6.49509 1.56029 6.73091 1.63636C6.96672 1.71243 7.18107 1.8435 7.35625 2.01874L9.375 4.04061L11.3937 2.01874C11.5389 1.87323 11.7113 1.75778 11.9011 1.67901C12.091 1.60024 12.2945 1.55969 12.5 1.55969C12.7055 1.55969 12.909 1.60024 13.0989 1.67901C13.2887 1.75778 13.4611 1.87323 13.6063 2.01874L15.625 4.04061L17.6437 2.01874C17.7889 1.87323 17.9613 1.75778 18.1511 1.67901C18.341 1.60024 18.5445 1.55969 18.75 1.55969C18.9555 1.55969 19.159 1.60024 19.3489 1.67901C19.5387 1.75778 19.7111 1.87323 19.8563 2.01874L21.875 4.04061L23.8937 2.01874C24.0389 1.87323 24.2113 1.75778 24.4011 1.67901C24.591 1.60024 24.7945 1.55969 25 1.55969C25.2055 1.55969 25.409 1.60024 25.5989 1.67901C25.7887 1.75778 25.9611 1.87323 26.1063 2.01874L28.125 4.04061L30.1437 2.01874C30.2889 1.87323 30.4613 1.75778 30.6511 1.67901C30.841 1.60024 31.0445 1.55969 31.25 1.55969C31.4555 1.55969 31.659 1.60024 31.8489 1.67901C32.0387 1.75778 32.2111 1.87323 32.3563 2.01874L34.375 4.04061L36.3937 2.01874C36.5389 1.87323 36.7113 1.75778 36.9011 1.67901C37.091 1.60024 37.2945 1.55969 37.5 1.55969C37.7055 1.55969 37.909 1.60024 38.0989 1.67901C38.2887 1.75778 38.4611 1.87323 38.6063 2.01874L40.625 4.04061L42.6437 2.01874C42.8188 1.84352 43.033 1.71245 43.2687 1.63631C43.5044 1.56017 43.7549 1.54116 43.9993 1.58084C44.2438 1.62052 44.4754 1.71776 44.6749 1.86453C44.8744 2.0113 45.0362 2.2034 45.1469 2.42499L46.7094 5.54999C46.8183 5.76726 46.875 6.00695 46.875 6.24999V43.75C46.875 43.993 46.8183 44.2327 46.7094 44.45L45.1469 47.575C45.0361 47.796 44.8744 47.9876 44.6751 48.134C44.4759 48.2803 44.2447 48.3773 44.0007 48.417C43.7567 48.4567 43.5067 48.4378 43.2713 48.3621C43.036 48.2863 42.822 48.1558 42.6469 47.9812L40.625 45.9594L38.6063 47.9812C38.4611 48.1267 38.2887 48.2422 38.0989 48.321C37.909 48.3997 37.7055 48.4403 37.5 48.4403C37.2945 48.4403 37.091 48.3997 36.9011 48.321C36.7113 48.2422 36.5389 48.1267 36.3937 47.9812L34.375 45.9594L32.3563 47.9812C32.2111 48.1267 32.0387 48.2422 31.8489 48.321C31.659 48.3997 31.4555 48.4403 31.25 48.4403C31.0445 48.4403 30.841 48.3997 30.6511 48.321C30.4613 48.2422 30.2889 48.1267 30.1437 47.9812L28.125 45.9594L26.1063 47.9812C25.9611 48.1267 25.7887 48.2422 25.5989 48.321C25.409 48.3997 25.2055 48.4403 25 48.4403C24.7945 48.4403 24.591 48.3997 24.4011 48.321C24.2113 48.2422 24.0389 48.1267 23.8937 47.9812L21.875 45.9594L19.8563 47.9812C19.7111 48.1267 19.5387 48.2422 19.3489 48.321C19.159 48.3997 18.9555 48.4403 18.75 48.4403C18.5445 48.4403 18.341 48.3997 18.1511 48.321C17.9613 48.2422 17.7889 48.1267 17.6437 47.9812L15.625 45.9594L13.6063 47.9812C13.4611 48.1267 13.2887 48.2422 13.0989 48.321C12.909 48.3997 12.7055 48.4403 12.5 48.4403C12.2945 48.4403 12.091 48.3997 11.9011 48.321C11.7113 48.2422 11.5389 48.1267 11.3937 47.9812L9.375 45.9594L7.35625 47.9812C7.18118 48.1564 6.96696 48.2875 6.73126 48.3637C6.49556 48.4398 6.24514 48.4588 6.00065 48.4191C5.75616 48.3794 5.52461 48.2822 5.32509 48.1354C5.12557 47.9887 4.9638 47.7966 4.85312 47.575L3.29062 44.45C3.18173 44.2327 3.12502 43.993 3.125 43.75V6.24999C3.12502 6.00695 3.18173 5.76726 3.29062 5.54999L4.85312 2.42499C4.96379 2.20355 5.12547 2.01158 5.32487 1.86489C5.52427 1.71819 5.75567 1.62097 6 1.58124ZM6.67813 5.76249L6.25 6.61874V43.3812L6.67813 44.2375L8.27188 42.6437C8.56489 42.3508 8.96224 42.1863 9.37656 42.1863C9.79088 42.1863 10.1882 42.3508 10.4813 42.6437L12.5 44.6656L14.5187 42.6469C14.6639 42.5014 14.8363 42.3859 15.0261 42.3071C15.216 42.2284 15.4195 42.1878 15.625 42.1878C15.8305 42.1878 16.034 42.2284 16.2239 42.3071C16.4137 42.3859 16.5861 42.5014 16.7313 42.6469L18.75 44.6656L20.7687 42.6469C20.9139 42.5014 21.0863 42.3859 21.2761 42.3071C21.466 42.2284 21.6695 42.1878 21.875 42.1878C22.0805 42.1878 22.284 42.2284 22.4739 42.3071C22.6637 42.3859 22.8361 42.5014 22.9813 42.6469L25 44.6656L27.0187 42.6469C27.1639 42.5014 27.3363 42.3859 27.5261 42.3071C27.716 42.2284 27.9195 42.1878 28.125 42.1878C28.3305 42.1878 28.534 42.2284 28.7239 42.3071C28.9137 42.3859 29.0861 42.5014 29.2313 42.6469L31.25 44.6656L33.2687 42.6469C33.4139 42.5014 33.5863 42.3859 33.7761 42.3071C33.966 42.2284 34.1695 42.1878 34.375 42.1878C34.5805 42.1878 34.784 42.2284 34.9739 42.3071C35.1637 42.3859 35.3361 42.5014 35.4813 42.6469L37.5 44.6656L39.5187 42.6469C39.6639 42.5014 39.8363 42.3859 40.0261 42.3071C40.216 42.2284 40.4195 42.1878 40.625 42.1878C40.8305 42.1878 41.034 42.2284 41.2239 42.3071C41.4137 42.3859 41.5861 42.5014 41.7313 42.6469L43.3219 44.2375L43.75 43.3812V6.61874L43.3219 5.76249L41.7281 7.35624C41.4351 7.64916 41.0378 7.81371 40.6234 7.81371C40.2091 7.81371 39.8118 7.64916 39.5187 7.35624L37.5 5.33436L35.4813 7.35624C35.3361 7.50175 35.1637 7.61719 34.9739 7.69596C34.784 7.77473 34.5805 7.81528 34.375 7.81528C34.1695 7.81528 33.966 7.77473 33.7761 7.69596C33.5863 7.61719 33.4139 7.50175 33.2687 7.35624L31.25 5.33436L29.2313 7.35624C29.0861 7.50175 28.9137 7.61719 28.7239 7.69596C28.534 7.77473 28.3305 7.81528 28.125 7.81528C27.9195 7.81528 27.716 7.77473 27.5261 7.69596C27.3363 7.61719 27.1639 7.50175 27.0187 7.35624L25 5.33436L22.9813 7.35624C22.8361 7.50175 22.6637 7.61719 22.4739 7.69596C22.284 7.77473 22.0805 7.81528 21.875 7.81528C21.6695 7.81528 21.466 7.77473 21.2761 7.69596C21.0863 7.61719 20.9139 7.50175 20.7687 7.35624L18.75 5.33436L16.7313 7.35624C16.5861 7.50175 16.4137 7.61719 16.2239 7.69596C16.034 7.77473 15.8305 7.81528 15.625 7.81528C15.4195 7.81528 15.216 7.77473 15.0261 7.69596C14.8363 7.61719 14.6639 7.50175 14.5187 7.35624L12.5 5.33436L10.4813 7.35624C10.3361 7.50175 10.1637 7.61719 9.97386 7.69596C9.78403 7.77473 9.58052 7.81528 9.375 7.81528C9.16948 7.81528 8.96597 7.77473 8.77614 7.69596C8.58632 7.61719 8.41389 7.50175 8.26875 7.35624L6.67813 5.76249Z" fill="black"/>
                        <path d="M9.375 14.0625C9.375 13.6481 9.53962 13.2507 9.83265 12.9576C10.1257 12.6646 10.5231 12.5 10.9375 12.5H29.6875C30.1019 12.5 30.4993 12.6646 30.7924 12.9576C31.0854 13.2507 31.25 13.6481 31.25 14.0625C31.25 14.4769 31.0854 14.8743 30.7924 15.1674C30.4993 15.4604 30.1019 15.625 29.6875 15.625H10.9375C10.5231 15.625 10.1257 15.4604 9.83265 15.1674C9.53962 14.8743 9.375 14.4769 9.375 14.0625ZM9.375 20.3125C9.375 19.8981 9.53962 19.5007 9.83265 19.2076C10.1257 18.9146 10.5231 18.75 10.9375 18.75H29.6875C30.1019 18.75 30.4993 18.9146 30.7924 19.2076C31.0854 19.5007 31.25 19.8981 31.25 20.3125C31.25 20.7269 31.0854 21.1243 30.7924 21.4174C30.4993 21.7104 30.1019 21.875 29.6875 21.875H10.9375C10.5231 21.875 10.1257 21.7104 9.83265 21.4174C9.53962 21.1243 9.375 20.7269 9.375 20.3125ZM9.375 26.5625C9.375 26.1481 9.53962 25.7507 9.83265 25.4576C10.1257 25.1646 10.5231 25 10.9375 25H29.6875C30.1019 25 30.4993 25.1646 30.7924 25.4576C31.0854 25.7507 31.25 26.1481 31.25 26.5625C31.25 26.9769 31.0854 27.3743 30.7924 27.6674C30.4993 27.9604 30.1019 28.125 29.6875 28.125H10.9375C10.5231 28.125 10.1257 27.9604 9.83265 27.6674C9.53962 27.3743 9.375 26.9769 9.375 26.5625ZM9.375 32.8125C9.375 32.3981 9.53962 32.0007 9.83265 31.7076C10.1257 31.4146 10.5231 31.25 10.9375 31.25H29.6875C30.1019 31.25 30.4993 31.4146 30.7924 31.7076C31.0854 32.0007 31.25 32.3981 31.25 32.8125C31.25 33.2269 31.0854 33.6243 30.7924 33.9174C30.4993 34.2104 30.1019 34.375 29.6875 34.375H10.9375C10.5231 34.375 10.1257 34.2104 9.83265 33.9174C9.53962 33.6243 9.375 33.2269 9.375 32.8125ZM34.375 14.0625C34.375 13.6481 34.5396 13.2507 34.8326 12.9576C35.1257 12.6646 35.5231 12.5 35.9375 12.5H39.0625C39.4769 12.5 39.8743 12.6646 40.1674 12.9576C40.4604 13.2507 40.625 13.6481 40.625 14.0625C40.625 14.4769 40.4604 14.8743 40.1674 15.1674C39.8743 15.4604 39.4769 15.625 39.0625 15.625H35.9375C35.5231 15.625 35.1257 15.4604 34.8326 15.1674C34.5396 14.8743 34.375 14.4769 34.375 14.0625ZM34.375 20.3125C34.375 19.8981 34.5396 19.5007 34.8326 19.2076C35.1257 18.9146 35.5231 18.75 35.9375 18.75H39.0625C39.4769 18.75 39.8743 18.9146 40.1674 19.2076C40.4604 19.5007 40.625 19.8981 40.625 20.3125C40.625 20.7269 40.4604 21.1243 40.1674 21.4174C39.8743 21.7104 39.4769 21.875 39.0625 21.875H35.9375C35.5231 21.875 35.1257 21.7104 34.8326 21.4174C34.5396 21.1243 34.375 20.7269 34.375 20.3125ZM34.375 26.5625C34.375 26.1481 34.5396 25.7507 34.8326 25.4576C35.1257 25.1646 35.5231 25 35.9375 25H39.0625C39.4769 25 39.8743 25.1646 40.1674 25.4576C40.4604 25.7507 40.625 26.1481 40.625 26.5625C40.625 26.9769 40.4604 27.3743 40.1674 27.6674C39.8743 27.9604 39.4769 28.125 39.0625 28.125H35.9375C35.5231 28.125 35.1257 27.9604 34.8326 27.6674C34.5396 27.3743 34.375 26.9769 34.375 26.5625ZM34.375 32.8125C34.375 32.3981 34.5396 32.0007 34.8326 31.7076C35.1257 31.4146 35.5231 31.25 35.9375 31.25H39.0625C39.4769 31.25 39.8743 31.4146 40.1674 31.7076C40.4604 32.0007 40.625 32.3981 40.625 32.8125C40.625 33.2269 40.4604 33.6243 40.1674 33.9174C39.8743 34.2104 39.4769 34.375 39.0625 34.375H35.9375C35.5231 34.375 35.1257 34.2104 34.8326 33.9174C34.5396 33.6243 34.375 33.2269 34.375 32.8125Z" fill="black"/>
                    </svg>
                    <strong>Transparent Pricing:</strong> We believe in honesty and clarity. We provide detailed quotes for repairs and fair, competitive prices for all our products.
                </div>

                <div className="ChooseText">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none" style={{position:"relative",right:"130px",top:"50px"}}>
                        <g clip-path="url(#clip0_127_2113)">
                            <path d="M26.6094 3.18438C26.0738 3.14484 25.537 3.12503 25 3.125V0C25.6142 0.000299461 26.2281 0.0232317 26.8406 0.06875L26.6094 3.18438ZM32.8719 4.59062C31.8702 4.20404 30.8413 3.89174 29.7938 3.65625L30.4781 0.60625C31.6781 0.875 32.851 1.23125 33.9969 1.675L32.8719 4.59062ZM37.1531 6.80937C36.7063 6.51138 36.2487 6.22994 35.7812 5.96563L37.3219 3.24688C38.3905 3.85206 39.413 4.53516 40.3812 5.29063L38.4594 7.75625C38.0357 7.42573 37.6 7.11093 37.1531 6.8125V6.80937ZM42.8844 12.4031C42.2661 11.525 41.5841 10.6936 40.8437 9.91563L43.1062 7.75938C43.9521 8.65312 44.7302 9.60104 45.4406 10.6031L42.8844 12.4031ZM45.2094 16.6281C45.0045 16.1326 44.7814 15.6448 44.5406 15.1656L47.3312 13.7594C47.8829 14.8566 48.3529 15.993 48.7375 17.1594L45.7687 18.1375C45.6009 17.6277 45.4143 17.1242 45.2094 16.6281ZM46.8656 24.4625C46.8402 23.3886 46.7358 22.318 46.5531 21.2594L49.6313 20.7281C49.8396 21.9365 49.9604 23.1552 49.9937 24.3844L46.8656 24.4625ZM46.4563 29.2688C46.5604 28.7396 46.6448 28.2083 46.7094 27.675L49.8125 28.0594C49.6619 29.2785 49.4217 30.4849 49.0938 31.6687L46.0813 30.8344C46.225 30.3198 46.35 29.7979 46.4563 29.2688ZM43.4812 36.7031C44.0562 35.7948 44.5625 34.849 45 33.8656L47.8563 35.1312C47.3563 36.2562 46.7781 37.3375 46.1219 38.375L43.4812 36.7031ZM40.4687 40.4688C40.85 40.0875 41.2146 39.6937 41.5625 39.2875L43.9312 41.3281C43.5303 41.7934 43.1123 42.2437 42.6781 42.6781L40.4687 40.4688Z" fill="black"/>
                            <path d="M25 3.125C21.4027 3.12526 17.8611 4.01265 14.6887 5.70856C11.5163 7.40447 8.81108 9.85657 6.81267 12.8477C4.81427 15.8387 3.58435 19.2765 3.23185 22.8564C2.87935 26.4364 3.41516 30.048 4.7918 33.3714C6.16844 36.6948 8.34344 39.6275 11.1241 41.9095C13.9048 44.1916 17.2054 45.7527 20.7335 46.4546C24.2617 47.1565 27.9084 46.9774 31.3508 45.9333C34.7932 44.8892 37.925 43.0123 40.4687 40.4688L42.6781 42.6781C39.771 45.5868 36.1914 47.7335 32.2564 48.9281C28.3213 50.1227 24.1524 50.3282 20.1189 49.5265C16.0855 48.7248 12.312 46.9406 9.13296 44.332C5.95387 41.7233 3.46729 38.3708 1.89354 34.5715C0.319789 30.7722 -0.292547 26.6434 0.11079 22.5508C0.514127 18.4583 1.92068 14.5284 4.20583 11.1094C6.49098 7.69043 9.58417 4.88785 13.2113 2.95001C16.8385 1.01217 20.8876 -0.00108979 25 8.79557e-07V3.125Z" fill="black"/>
                            <path d="M23.4375 9.375C23.8519 9.375 24.2493 9.53962 24.5424 9.83265C24.8354 10.1257 25 10.5231 25 10.9375V27.2188L35.15 33.0187C35.4994 33.2295 35.7524 33.5685 35.8551 33.9634C35.9578 34.3583 35.9019 34.7776 35.6995 35.1319C35.4971 35.4861 35.1642 35.7471 34.7718 35.8591C34.3795 35.9711 33.9589 35.9252 33.6 35.7313L22.6625 29.4813C22.4234 29.3446 22.2246 29.1473 22.0863 28.9091C21.948 28.6709 21.8751 28.4004 21.875 28.125V10.9375C21.875 10.5231 22.0396 10.1257 22.3326 9.83265C22.6257 9.53962 23.0231 9.375 23.4375 9.375Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_127_2113">
                                <rect width="50" height="50" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    <strong>Convenient Location & Fast Turnaround:</strong> Our centrally located service center ensures quick access, while our efficient workflow lets us return your devices promptly.
                </div>
            </div>

            <div className='LastText'>
                Experience the difference of a truly dedicated Sales and Repair Center. We welcome you to explore our wide range of products, benefit from our expert consultations, and rely on our skilled technicians for any repair or maintenance needs. We look forward to serving you and ensuring that your devices work seamlessly, allowing you to focus on what truly matters – staying connected, productive, and inspired.
            </div>

        </div>
    );
};

export default About;