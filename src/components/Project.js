import react from "react"
import img2 from '../assets/images/Heriseon-Marketing.png'
import img3 from '../assets/images/Holiday-Calendar.png'
import img5 from '../assets/images/placeholder-3.png'
import img6 from '../assets/images/Run-Buddy.png'
import img7 from '../assets/images/Smart-Homie.png'


function Project () {
    return(
        <article className="projects" id="projects">
      <h3>Projects</h3> 
      <div className="project1" id="project1">
        {/*this one needs to be the biggest*/}
        <a href="https://laceyaguigam.github.io/run-buddy/">
          <img src={img6} alt="Run Buddy Website" /> 
        </a>
      </div>
      <div className="project-2" id="project-2">
        <a href="https://laceyaguigam.github.io/Horiseon-Media-Marketing/">
          <img src={img2} alt="Horiseon Website" />
        </a>
        <a href="https://laceyaguigam.github.io/Holiday-Calendar-/ ">
          <img src={img3} alt="Holiday Calendar" />
        </a>
        <a href="https://github.com/rnhamlin/smart-homie/tree/develop">
          <img src={img7} alt="Smart-Homie App" />
        </a>
        <a href="https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm ">
          <img src={img5} alt="placeholder-3" />
        </a>
      </div>    
    </article>   
    )
}
export default Project; 



