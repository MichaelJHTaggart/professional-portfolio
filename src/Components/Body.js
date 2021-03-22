import React from 'react'
import '../scss/main.scss'
import hero from "../../src/assets/images/mjht.jpeg"
import lemon from "../../src/assets/images/lemonprop.png"
import handle from "../../src/assets/images/handlewhile.png"




const Body = props => {
  const openNewTab = (url) => {
    const win = window.open(`${url}`);
    win.focus();
  }

  window.addEventListener("scroll", function () {
    const parallax = document.getElementById("parallax");
    let offset = window.pageYOffset;
    parallax.style.objectPosition = offset * 0.1 + "px";
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
          <img alt="Michael Taggart's Portfolio" id="parallax" src={hero} />
        </div>
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
    </div >
  );
}
export default Body