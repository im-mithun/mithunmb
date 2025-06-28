import React from "react";
import '../assets/styles/Project.scss';

function Certifcation() {
    return(
    <div className="projects-container" id="works">
        <h1>Projects and Internships</h1>
        <div className="projects-grid">
            
            <div className="project">
                <h2>Microsoft Certified: Azure Data Fundamentals</h2>
                <p>Skills: Azure SQL · Azure Cosmos DB · Azure Synapse · Azure Data Lake · Microsoft Power BI · Data Fundamentals · Data Warehousing · Data Security · Cloud Data Services · Azure Databricks · Microsoft azure sql database · Cloud Computing · Cloud data management · Data Analytics · Data Processing · Data Visualization · Maria DB · MySQL · PostgreSQL</p>
            </div>
            <div className="project">
                <h2>Certified SOLIDWORKS ASSOCIATE | Dassault Systemes</h2>
                <p>Skills: SOLIDWORKS · 3D Modeling · Assembly Design · Engineering Drawings · Parametric Design · CAD · Mechanical Design · Blueprint Reading</p>
            </div>
            <div className="project">
                <h2>CATIA CAD | Udemy</h2>
                <p>Skills: CATIA V5 · 3D CAD Modeling · Mechanical Design · Part & Assembly Design · Drafting · Surface Modeling · Engineering Drawings

</p>
            </div>
            <div className="project">
                <h2>MERN Full Stack Certifcation</h2>
                <p>Skills: MongoDB · React.js · Node.js · Express.js · Front-End Development · Back-End Web Development · Bootstrap (Framework)
</p>
            </div>            
        </div>
    </div>
    );
}

export default Certifcation;
