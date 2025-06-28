import React, { useState, useEffect } from "react";
import "../assets/styles/Main.scss";

const text = `I am a Mechanical Engineering student with a unique blend of passions. Proficient in Fullstack and CAD modeling, I bridge the gap between traditional mechanical engineering and cutting-edge computational techniques. My goal is to leverage this diverse skill set to enhance vehicle performance, optimize engineering processes, and drive innovation in the automotive industry. I'm equally passionate about coding and designing, using both to solve complex engineering challenges.`;


function Main() {
  return (
    <div className="container" id="main">
      <div className="about-section">
        <div className="content">
          <h1>Mithun</h1>
          <br />
          
          <div className="text-container">
         <p style={{ fontWeight: "", fontSize: "1.5rem" }}>
    {text}
  </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
