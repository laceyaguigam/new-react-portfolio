import logo from './logo.svg';
import './App.css';
import img1 from './assets/images/about-me.jpg'
import Footer from "./components/Footer"
import Project from "./components/Project"
import Header from "./components/Header"
import Resume from "./components/Resume"



function App() {
    return (
      <div>
    {/* HEADER SECTION */}
  <Header/>
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
      <Project/>
      <Resume/>
     <Footer/> 
    </section>               
  </div>
  
    );
  }
  
  export default App;