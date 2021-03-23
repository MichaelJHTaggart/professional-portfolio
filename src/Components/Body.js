import React from 'react'
import '../scss/main.scss'
import hero from "../../src/assets/images/mjht.jpeg"
import lemon from "../../src/assets/images/lemonprop.png"
import handle from "../../src/assets/images/handlewhile.png"

import CSS_Logo from '../assets/Skills/css-5.svg'
import Git_Logo from '../assets/Skills/git-icon.svg'
import GitHub_Logo from '../assets/Skills/github-icon-1.svg'
import HTML_Logo from '../assets/Skills/html5.svg'
import JS_Logo from '../assets/Skills/javascript.svg'
import Node_Logo from '../assets/Skills/node-js-logo.svg'
import Postgres_Logo from '../assets/Skills/postgresql.svg'
import Postman_Logo from '../assets/Skills/postman-logo-stacked.svg'
import React_Logo from '../assets/Skills/react-2.svg'
import Sass_Logo from '../assets/Skills/sass-1.svg'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faHtml5, faCss3, faSass, faNodeJs, faReact, faGit } from '@fortawesome/free-brands-svg-icons'
import { fas, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, faHtml5, faCss3, faSass, faNodeJs, faReact, faGit)

const Body = props => {
  const openNewTab = (url) => {
    const win = window.open(`${url}`);
    win.focus();
  }

  window.addEventListener("scroll", function () {
    const parallax = document.getElementById("parallax");
    let offset = window.pageYOffset;
    parallax.style.objectPosition = offset * 0.7 + "px";
  })

  window.addEventListener("scroll", function () {
    const parallax2 = document.getElementById("parallax2");
    console.log(parallax2)
    let offset = window.pageYOffset;
    parallax2.style.objectPosition = offset * 0.05 + "px";
  })

  window.addEventListener("scroll", function () {
    const parallax3 = document.getElementById("parallax3");
    let offset = window.pageYOffset;
    parallax3.style.objectPosition = offset * -0.05 + "px";
  })

  return (
    <div className="parallax-sections component-wrapper" >
      <section className="home-section">
        <div id="parallax" >
          <div className="hero-text-container">
            <h2 className="hero-text">Michael J.H. Taggart</h2>
            <h2 className="hero-text">Full Stack</h2>
            <h2 className="hero-text">Web Developer</h2>
          </div>

          <img alt="Michael Taggart's Portfolio" id="parallax" src={hero} />


        </div>
      </section>

      <section className="divider">
        <h2 className="divider-header">Projects</h2>
        <div className="border-line"></div>
      </section>

      <section className="section-centering">
        <div className="project-banner-left">
          <h2>Property Management</h2>
          <p>This website provides a one-stop experience for property managers and tenants. It is built to add and resolve maintenance requests, payments, and to manage properties. The manager view and the tenant view are similar experiences but are two different views.</p>

          <button className="project-button"
            onClick={() => openNewTab('https://lemonprop.com')} aria-label="Check out the website!">Try it out
          </button>
        </div>

        <div>
          <img alt="lemonprop.com website" id="parallax2" src={lemon} />

        </div>
      </section>
      <section className="section-centering">
        <div className="project-banner-right">
          <h2>Time Management</h2>
          <p>Managing time is important in every business. Once you create an account you will be able to track your time for each project that you start! Don't forget to name each project!</p>
          <button className="project-button" onClick={() => openNewTab('https://handlewhile.com')} aria-label="Check out the website!">Try it out
          </button>
        </div>

        <div>
          <img alt="handlewhile.com website" id="parallax3" src={handle} />
        </div>

      </section>
      <section className="divider">
        <h2 className="divider-header">Skills</h2>
        <div className="border-line"></div>
      </section>
      <ol className="skills">
        <li className="skills-image">
          <img alt="CSS" src={CSS_Logo} /><h2>CSS</h2>
        </li>
        <li className="skills-image">
          <img alt="Git" src={Git_Logo} /><h2>Git</h2>
        </li>
        <li className="skills-image">
          <img alt="GitHub" src={GitHub_Logo} /><h2>GitHub</h2>
        </li>
        <li className="skills-image">
          <img alt="HTML" src={HTML_Logo} /><h2>HTML</h2>
        </li>
        <li className="skills-image">
          <img alt="Javascript" src={JS_Logo} /><h2>Javascript</h2>
        </li>
        <li className="skills-image">
          <img alt="Node.js" src={Node_Logo} /><h2>Node.js</h2>
        </li>
        <li className="skills-image">
          <img alt="PostgreSQL" src={Postgres_Logo} /><h2>PostgreSQL</h2>
        </li>
        <li className="skills-image">
          <img alt="Postman" src={Postman_Logo} /><h2>Postman</h2>
        </li>
        <li className="skills-image">
          <img alt="React" src={React_Logo} /><h2>React</h2>
        </li>
        <li className="skills-image">
          <img alt="Sass" src={Sass_Logo} /><h2>Sass</h2>
        </li>
      </ol>
      <section className="divider">
        <h2 className="divider-header">Contact Me!</h2>
        <div className="border-line"></div>
      </section>
      <section>
        <h2 className="contact-info">Email: mtaggarthawk@gmail.com</h2>
        <h2 className="contact-info">Phone: 801-735-2563</h2>
        <h2 className="contact-info">Or click the links above for my GitHub, LinkedIn, Xing, or Resume!</h2>
      </section>
    </div >
  );
}
export default Body