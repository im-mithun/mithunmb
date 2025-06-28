import React from "react";
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="works">
        <h1>Projects and Internships</h1>
        <div className="projects-grid">
            
            <div className="project">
                <h2>Production Engineer Intern | TAFE, Madurai</h2>
                <p>Conducted a comprehensive time and motion study for a sub-assembly; identified bottlenecks and proposed workflow changes to achieve 20 % lead time reduction. Optimized line balance and resource allocation to improve overall throughput and line efficiency.
                Performed defect mapping across multiple stages to support zero-defect quality implementation</p>
            </div>
            <div className="project">
                <h2>Space Utility Repair Robot</h2>
                <p>Won 1st place in Open-ended Track, reducing mission risks and operational costs. Led concept-to-design of a satellite repair robot; integrated carbon fibre titanium frame to enhance durability and
                    cost-effectiveness. Filed for a design patent (pending approval) based on research and design innovations during the project.</p>
            </div>
            <div className="project">
                <h2>MERN Full Stack Development</h2>
                <p>Developed a MERN stack LMS enabling role-based access, user tracking, and management, handles 100+ users,
and hosted in Render. Designed and implemented RESTful API endpoints in Node.js to support scalable user and course operations.</p>
            </div>
            <div className="project">
                <h2>Product Design Intern | JOL Energy</h2>
                <p>Assisted in the design and development of components for an energy system and facilitated iterative design
improvements by evaluating performance. Guided junior team members in design for components such as conveyors and battery systems, including requirement calculations and design validation.
</p>
            </div>
            <div className="project">
                <h2>Accenture Job Simulation, Forage | Data Analytics</h2>
                <p>Consulting firm specializing in data analytics. Translated project objectives into data-driven insights using advanced data analysis. Implemented data modeling and cleaning procedures to improve data integrity.
</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;
