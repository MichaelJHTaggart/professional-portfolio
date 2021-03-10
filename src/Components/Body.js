import '../scss/main.scss'

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
          <img alt="A preview of the website at the size of a personal computer" class="responsive-image" src="https://lh6.googleusercontent.com/nYccIuWtT-o7xScUEM83DLRdyVY-Zj_tZYwgXq7lvHXJjf8pxGxoBrQy9f0T8ZlcOPA_XdwXpxYA31P8FtGUDvEyuI0Z-ynNC6pJ6dtigjbZlYgLqauxhL2Lvlpn5ktxcg=w1280" />
        </div>
        <div id="parallax-image-right">
          <img alt="A preview of the website at the size of a cellphone" class="responsive-image-small" src="https://lh4.googleusercontent.com/ppmnoSMVpFQwMPqrthhrTBd5TdF7DqSMnZjRs849mjjXdlzNb_PLQRKcu2mI7kxjKFRlHwiUYerSA6kx1c_VJmek7cgttWVDI5u2Bo9RuuUcT2QPczUpNh5gSchGy3S_dA=w1280" />
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
          <img alt="A preview of the website at the size of a personal computer" class="responsive-image" src="https://lh4.googleusercontent.com/ohVLItmk-YO7ZQqCvvM9kZsOVG1Ej59g_YqYwMLA8kGL49NNoTOKgoL-fCMSE2ve02mMs1qDudkHBXSxS4zAvkKNx9PuRTZQ4Mtil3rbLxDamVR3sAPBlQgFIYuJKXA7=w1280" />
        </div>
        <div id="parallax-image-left">
          <img alt="A preview of the website at the size of a cellphone" src="https://lh5.googleusercontent.com/4zX1WypUJRduxNY-5EZcwKjNpd1Y4COgN-rVIX6PblIoOYRqZINNE0-f5Eg0h-hOxYTFBlrlqT1Mb_X1TGJKQfjUASt_yCEapkR2Fvatzq9fnTzvhGK64MqrXoD1yfw3ng=w1280" />
        </div>
      </section>

    </div>
  );
}
export default Body