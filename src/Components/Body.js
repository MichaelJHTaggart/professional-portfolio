import '../scss/main.scss'
import lemonLarge from '../assets/images/lemonpropLarge.png'
import handleLarge from '../assets/images/handlewhileLarge.png'
import handlePhone from '../assets/images/pHandlewhile.png'
import lemonPhone from '../assets/images/pLemonprop.png'

const Body = props => {

  const openNewTab = (url) => {
    const win = window.open(`${url}`);
    win.focus();

  }


  return (
    <div>
      <section className="body">

        <div className="project-banner-right">
          <h2>Property Management</h2>
          <p>This website provides a one-stop experience for property managers and tenants. It is built to add and resolve maintenance requests, payments, and to manage properties. The manager view and the tenant view are similar experiences but are two different views.</p>

          <button onClick={() => openNewTab('https://handlewhile.com')} aria-label="Check out the website!">Try it out
   </button>
        </div>

        <div id="parallax-image-1">
          <img alt="A preview of the website at the size of a personal computer" class="responsive-image" src={lemonLarge} />
        </div>
        <div id="parallax-image-right">
          <img alt="A preview of the website at the size of a cellphone" class="responsive-image-small" src={lemonPhone} />
        </div>


      </section>

      <section className="body">
        <div className="project-banner-left">
          <h2>Time Management</h2>
          <p>Managing time is important in every business. Once you create an account you will be able to track your time for each project that you start! Don't forget to name each project!</p>
          <button className="project-button" onClick={() => openNewTab('https://lemonprop.com')} aria-label="Check out the website!">Try it out
   </button>
        </div>


        <div id="parallax-image-2">
          <img alt="A preview of the website at the size of a personal computer" class="responsive-image" src={handleLarge} />
        </div>
        <div id="parallax-image-left">
          <img alt="A preview of the website at the size of a cellphone" src={handlePhone} />
        </div>
      </section>

    </div>
  );
}
export default Body