import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { SMUlogo, CJClogo } from "../../data"


const Timeline = () => {
  return (
    <>
      <VerticalTimeline
        lineColor={"#302f2f"}
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - present"
          icon={<img className="smu" src={SMUlogo} alt="smu" style={{width:"45px", marginTop:"3px", marginLeft:"8px"}}/>}
          iconStyle={{background: "#ffff"}}
        
        >
          <h5 className="vertical-timeline-element-title">BSc Information Systems (Business Analytics and Digitalization & Cloud Solutions), 2nd Major in Computing Studies (AI)</h5>
          <h6 className="vertical-timeline-element-subtitle">Singapore Management University</h6>
          <p>
            <ul>
                <li>Ultimate Frisbee: Competitive (2021-2023)</li>
                <li>SMU Business Intelligence & Analytics: Member (2022-Present)</li>
                <li>SMU .HACK: Member (AY2022-Present)</li>
                <li>Tamizha: Subcommittee Member (2021-2022)</li>
                <li>Tamizha: Vice President (2022-2023)</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
        >
          <h5 className="vertical-timeline-element-title">Infantry Specialist</h5>
          <h6 className="vertical-timeline-element-subtitle">
            Singapore Armed Forces (SAF)
          </h6>
          <p>
            <ul>
              <li>3rd Singapore Infantry Regiment (3SIR)</li>
              <li>Assistant Platoon Sergeant / Section Commander </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          icon={<img className="smu" src={CJClogo} alt="smu" style={{width:"45px", marginTop:"11px", marginLeft:"8px"}}/>}
          iconStyle={{background: "#ffff"}}
        >
          <h5 className="vertical-timeline-element-title">Catholic Junior College</h5>
          <h6 className="vertical-timeline-element-subtitle">
            A-Levels
          </h6>
          <p>
            Co-Curricular Activities:
            <ul>
              <li>Rugby</li>
              <li>Ultimate Frisbee</li>
            </ul>
            
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};

export default Timeline;
