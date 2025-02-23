import React from "react";
//import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faCogs } from '@fortawesome/free-solid-svg-icons';


/*const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "Flask",
    "Python",
    "SQL",
    "PostgreSQL",
    "Postman"
];*/

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS",
    "Azure",
    "Linux",
    "Snowflake",
    "Pandas",
    "Selenium",
];

/*const labelsThird = [
    "OpenAI",
    "Groq",
    "LangChain",
    "Qdrant",
    "Hugging Face",
    "LlamaIndex",
    "Streamlit",
];*/

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Areas</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x"/>
                    <h3>Mechanical Design</h3>
                    <p>I have built a diverse array of CAD models from scratch using modern technologies such as SolidWorks, CATIA, Fusion 360, and Siemens NX.</p>
                    
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>MERN Full Stack Development</h3>
                    <p>I build dynamic web applications using MongoDB, Express.js, React, and Node.js, ensuring seamless front-end and back-end integration for optimal performance and user experience.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                
            </div>
        </div>
    </div>
    );
}

export default Expertise;