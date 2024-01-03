import React from 'react'
import { useParams } from "react-router-dom";
import {ProjectList} from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    return (
      <div className="project">
        <h1> {project.name}</h1>
        <img src={project.image} alt=''/>
        <p>
          <b>Skills:</b> {project.skill}
        </p>
        <div className="icons">
        <a href={project.video} target="_blank" rel="noopener noreferrer">
            <YouTubeIcon />
        </a>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
        </a>
        </div>

      </div>
    );
  }
  
  export default ProjectDisplay;