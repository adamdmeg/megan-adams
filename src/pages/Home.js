import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";
import WebPic from '../assets/WebPic.png';

function Home() {
  return (
    <div className='home'>

      <div className='about'>
  

        <div className='prompt'>
            <h2>Hello, world!</h2>

            <p>My name is Megan, a current sophomore CS major @ UNC-Chapel Hill. Interested in software engineering, computational biology, and machine learning. Thanks for stopping by!</p>
            
            <a href="https://www.linkedin.com/in/megan-adams3/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            
            <a href="mailto:adamsdmegan@gmail.com">
              <EmailIcon />
            </a>
           
           <a href='https://github.com/adamdmeg' target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
           
            </a>
        </div>

        <div className='about-image'>
            <img src={WebPic} alt='my headshot'></img>
        </div>
      
      </div>

      <div className='skills'>

        <h1>Skills</h1>

        <ol className='list'>
          <li className = "item">
            <h2> Back-End</h2>
            <span>NodeJS, MongoDB</span>
          </li>

          <li className = "item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, MaterialUI, StyledComponents
            </span>
          </li>

          <li className = "item">
            <h2> Languages </h2>
            <span>Java, Python, JavaScript, C</span>
          </li>

          <li className = "item">
            <h2> Software </h2>
            <span>GitHub, Tableau, VS Code, IntelliJ IDEA</span>
          </li>

          <li className = "item">
            <h2>Environments</h2>
            <span>Linux</span>
          </li>

        </ol>
      </div>

    </div>
  )
}

export default Home