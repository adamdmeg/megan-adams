import React from 'react'
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";


function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#dbd3d7'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2018-2022"
          iconStyle={{background: "#F5F1F3"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Cardinal Gibbons High School, Raleigh, North Carolina
          </h3>
          <p> High School Diploma </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2020-2022"
          iconStyle={{background: "#f7dae9"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Laboratory Intern - ImmunoReagents, Inc.
          </h3>
          <h4> Raleigh, North Carolina </h4>
          <p>Learned and participated in hands-on experience relating to antibody purification & buffer production/composition.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date="2022-2026"
          iconStyle={{background: "#F5F1F3"}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            University of North Carolina at Chapel Hill, Chapel Hill, North Carolina
          </h3>
          <p> B.S. Computer Science; Minor in Data Science, Minor in French </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2023-Present"
          iconStyle={{background: "#f7dae9"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Sponsorship Committee Member - Pearl Hacks Hackathon
          </h3>
          <h4>Chapel Hill, North Carolina</h4>
          <p> Reached out to over 50 recruiters at 33 different companies in efforts to gain sponsorships for UNC's beginner-friendly hackathon targeted towards women in tech.</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement 
          className='vertical-timeline-element--work'
          date="2023-Present"
          iconStyle={{background: "#f7dae9"}}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Undergraduate Teaching Assistant - UNC Department of Computer Science
          </h3>
          <h4> Chapel Hill, North Carolina </h4>
          <p>Responsible for facilitating the learning students and holding office hours for COMP 110, an introductory Python-based computer science class.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience