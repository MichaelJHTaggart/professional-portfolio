import '../scss/main.scss'

const Body = props => {

 const openNewTab = (url) => {
  const win = window.open(`${url}`);
  win.focus();
 }

 return (
  <div>
   <h2>Time Management</h2>
   <p>Managing time is important in every business. Once you create an account you will be able to track your time
          for each project that you start! Don't forget to name each project!</p>
   <div className="project-button" onClick={() => openNewTab('https://handlewhile.com')} aria-label="Check out the website!">Try it out</div>

   <h2>Property Management</h2>
   <p>This website provides a one-stop experience for property managers and tenants. It is built to add and resolve
   maintenance requests, payments, and to manage properties. The manager view and the tenant view are similar
      experiences but are two different views.</p>
   <div className="project-button" onClick={() => openNewTab('https://lemonprop.com')} aria-label="Check out the website!">Try it out
   </div >
  </div >
 );
}
export default Body