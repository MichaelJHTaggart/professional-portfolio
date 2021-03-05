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
   
   <div className="project-button" onClick={() => openNewTab('https://handlewhile.com')} aria-label="Check out the website!">Try it out
   </div>
   </div>
   
   <div>
   <img alt="A preview of the website at the size of a personal computer" class="responsive-image" src="https://lh3.googleusercontent.com/tuZKlKB9xP0ZsoqXV08z75IpW1SDrRK3lVfyMFWki7QkcRdsrMf5UIHQwDO7fJpOFfpyWQ01K2IyzGXsWrklZ4cvUwmus6TIG1PesNwby0vQWNMyKxRPkqZvKmJlzmQB9Q=w1280"/>
   </div>
   <div className="responsive-image-small-right">
   <img alt="A preview of the website at the size of a cellphone" class="responsive-image-small" src="https://lh3.googleusercontent.com/uAFDoigB0k_VA82jSvR2NcBZq-5Ai_JZOkreS5p36JE1gLIbJToKzEvpQ8eSEt9mdquk0OoVpzUeqhUkqsudv6u8iPOjzpDzCaVvQ11Go3QWpsXxdeHwHE9AvdW-wfcqKQ=w1280" />
   </div>
   </section>

<section className="body">
<div className="project-banner-left">
   <h2>Time Management</h2>
   <p>Managing time is important in every business. Once you create an account you will be able to track your time for each project that you start! Don't forget to name each project!</p>
   <div className="project-button" onClick={() => openNewTab('https://lemonprop.com')} aria-label="Check out the website!">Try it out
   </div>
   </div>
   
   
   <div className="resize">
   <img alt="A preview of the website at the size of a personal computer" class="responsive-image" src="https://lh5.googleusercontent.com/-J4_G4q1aZesPQCG_lwkb-B4doFjbwzYIgpgWAzxDiXu3MMWETSres0sfAQtMnwzTAiVZFSHhktkKSQZcOs7hgsdy5CwpnHvj_PofdrRGPIfjVwA9s-YRmdWWnuasFZ1=w1280" />
   </div>
 <div className="responsive-image-small-left">  
 <img alt="A preview of the website at the size of a cellphone" src="https://lh6.googleusercontent.com/OCnQZ9TVm0cwWbcvhgNCbKKF7f4kuhL9dQ1leU3qNqK98pcRqAPFkVD4G-ZuiOUvcos5QYwJYGxonWCHJv8NMwN_081cBZexQPkTToidJ3ECOi8q5VeNulEc48iWAap0mQ=w1280" />
</div>
</section>

</div>
 );
}
export default Body