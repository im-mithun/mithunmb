  import React from "react";
  import '@fortawesome/free-regular-svg-icons'
  import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
  import 'react-vertical-timeline-component/style.min.css';
  import '../assets/styles/Timeline.scss';

  function Timeline() {
    return (
      <div id="career" className="career-container">
        <h1 className="career-title">Career</h1>
        <VerticalTimeline layout="1-column" className="timeline">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: '#000000', color: 'white' }}
            contentStyle={{ maxWidth: "500px", padding: "15px", textAlign: "left" }} 
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            
          >
            <h3 className="vertical-timeline-element-title">B.Tech Mechanical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">Vellore Institute of Technology, Vellore</h4>
            <p>CGPA up till 6 sem - 8.74</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2020 - 2022"
            iconStyle={{ background: '#000000', color: 'white' }}
            contentStyle={{ maxWidth: "500px", padding: "15px", textAlign: "left" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            
          >
            <h3 className="vertical-timeline-element-title">Senior Secondary School</h3>
            <h4 className="vertical-timeline-element-subtitle">Mahatma Montessori School</h4>
            <p>Percentage - 87.2</p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2020"
            iconStyle={{ background: '#000000', color: 'white' }}
            contentStyle={{ maxWidth: "500px", padding: "15px", textAlign: "left" }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
                     >
            <h3 className="vertical-timeline-element-title">Higher Secondary School</h3>
            <h4 className="vertical-timeline-element-subtitle">Mahatma Montessori School</h4>
            <p>Percentage - 94.4</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }

  export default Timeline;
