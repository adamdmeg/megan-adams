import React from 'react'
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
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
        <p>Coded by Megan with 💗 2023</p>
    </div>
  )
}

export default Footer