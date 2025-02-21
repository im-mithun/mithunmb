import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="works">
        <h1>Projects and Internships</h1>
        <div className="projects-grid">
            <div className="project">
                <h2>Wearable Non-Invasive Continuous Glucose Monitor</h2>
                <p>Designed a cost-effective wearable CGM device using microwave-based glucose sensing, focusing on reducing costs and increasing lifespan.</p>
            </div>
            <div className="project">
                <h2>MERN Full Stack Development</h2>
                <p>Completed a full-stack development course covering MongoDB, Express.js, React.js, and Node.js, with a project demonstrating practical applications.</p>
            </div>
            <div className="project">
                <h2>Machine Design Intern, JOL Energy</h2>
                <p>Company specializing in energy systems. Assisted in the design and development of mechanical components for energy systems. Mentored junior team members to enhance design efficiency.
</p>
            </div>
            <div className="project">
                <h2>Accenture | Data Analytics</h2>
                <p>Consulting firm specializing in data analytics. Translated project objectives into data-driven insights using advanced data analysis. Implemented data modeling and cleaning procedures to improve data integrity.
</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;