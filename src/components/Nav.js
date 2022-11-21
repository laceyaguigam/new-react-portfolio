import react from "react"

function Nav () {
    return(
        <div className="header">
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
    )
}
export default Nav
