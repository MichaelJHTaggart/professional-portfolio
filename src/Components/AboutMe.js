import React from 'react'
import family from "../../src/assets/images/family.jpeg"
import { Link } from 'react-router-dom';

const AboutMe = props => {


 return (<div className="about-me">

  <img alt="Taggart Family Photo" className="img-container" src={family} />

  <div className="text-container">
   <h2 className="title">About Me</h2>
   <p className="question">Q: Tell me about yourself.</p>
   <p className="text" className="text"> A: I love my family. My wife's name is Lauren and she is the bomb.com. She's the reason for all of my education and inspired me to start going to college in 2017. I play guitar, sing, act, write music, film videos, play sports (I love floorball), some video games, and love finance! I grew up in California, when I was 20 moved to Sweden for two years (I speak a little Swedish), and have lived in Utah for eight. I am very outgoing, and upbeat. I tend to always be humming or singing music that is stuck in my head. </p>
   <p className="question">Q: Tell me about your schooling.</p>
   <p className="text" className="text"> A: I was going to school part-time since then and I am just two classes away from getting my associates in Business Management. While in college I have been working full-time in a call center for Wayfair.com. I climbed up as high up as I could in terms of doing customer service, and realized that the next step was management. I made a pivot so I could do something that drove me more. I did some research, and found Devmountain. They pushed me for three months to absorb as much as possible, and surprisingly... I want more!</p>
   <p className="question">Q: Why do you want to keep developing?</p>
   <p className="text"> A: I love it. Learning some new thing is fulfilling and interesting to me. I am just curious on how to make things work. I want to keep learning, and growing, and building! It's very discouraging and hard sometimes when I don't understand something, but it is a logical system. So it can always be figured out! It's everything I dreamed of doing, and I feel so fortunate to have had the means to make a pivot into something I really do enjoy.</p>
   <p className="question">Q: What is your ideal work environment?</p>
   <p className="text">A: With a team of developers that push the limits of their understanding constantly. This environment forces me to learn new things, and constantly be learning.</p>
   <p className="question">Q: What do you want to do with the skills you have learned and continue to develop?</p>
   <p className="text">My ultimate goal is to make a difference in the users interactions with a website or any other projects I work on. I want to hear a story about how an online tool that I built helped someone have a more fulfilled life. For example: I was overseas, and I was able to take care of my family easily through the online application that they had built out. I would like to stick with a company for a long time, and make a difference like that.</p>
   <p className="question">Q: What would a coworker say your biggest opportunity is?</p>
   <p className="text">A: Definitely my ability to focus on multiple tasks at once. I am a very one track person, and it can be challenging for me to work on multiple projects at one time. Though I always give it my best shot!</p>
   <p className="question">Q: What would a coworker say your strongest attribute is?</p>
   <p className="text">A: I think my strongest attribute is communication. I will be very open with what I have been doing, and what I am struggling with. In coding it has been surprisingly helpful to 'rubber-duck' with someone about challenges.</p>

   <h2><Link className="title" to='/'>Return Home</Link></h2>
  </div>



 </div>
 );
}
export default AboutMe