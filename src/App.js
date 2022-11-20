import logo from './logo.svg';
import './App.css';
import img1 from './assets/images/about-me.jpg'
import img2 from './assets/images/Heriseon-Marketing.png'
import img3 from './assets/images/Holiday-Calendar.png'
import img5 from './assets/images/placeholder-3.png'
import img6 from './assets/images/Run-Buddy.png'
import img7 from './assets/images/Smart-Homie.png'

function App() {
  return (
    <div>
  {/* HEADER SECTION */}
  <header className="fixed-header">
    <div className="header">
      {/* NAVIGATION SECTION WITHIN HEADER*/}
      <div>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li> <a href="#resume"> Resume</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
  {/* CONTENT SECTION STARTS*/}
  {/*HERO SECTION WITHIN CONTENT*/}
  <div className="hero">
    <h1> Lacey Aguigam</h1>  
  </div>
  <section className="content">
    <img src={img1} className="float-right" alt="portrait of developer" />
    <article className="about-me" id="about-me">
      <h3> About Me</h3>
      <p>
        Lacey Aguigam is new to the field of web development and is currentlyworking on receiving a certification
        through UC Davis Fullstack Flex Web Development program. Lacey has always had an interest in web development 
        and plans on a career change. Lacey is excited to take on new opportunities in the web developer field.
      </p>
    </article>
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
    <article className="contact-me" id="contact-me">
      <h3>Contact Me</h3>
      <div className="contact-info">
        <ul>
          <li>
            559.589.4952
          </li>
          <li>
            laceyaguigam@yahoo.com
          </li>
          <li>
            <a href="https://github.com/laceyaguigam">GitHub</a>
          </li>
        </ul>
      </div>
    </article>
  </section>               
</div>

  );
}

export default App;
