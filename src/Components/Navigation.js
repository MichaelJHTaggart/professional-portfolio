import React from 'react'
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faGithub, faXing } from '@fortawesome/free-brands-svg-icons'
import { fas, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(fab, fas, faGithub, faXing, faFileAlt)

const Navigation = props => {
 const openNewTab = (url) => {
  const win = window.open(`${url}`);
  win.focus();
 }

 return (
  <div className="sticky">
   <ul>
    <li onClick={() => openNewTab('https://github.com/MichaelJHTaggart')} aria-label="Check out my portfolio!">
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span><FontAwesomeIcon icon={['fab', 'github']} /></span>
    </li>
    <li onClick={() => openNewTab('https://www.linkedin.com/in/michaeljhtaggart/')} aria-label="Check out my portfolio!">
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span class="fa fa-linkedin"></span>
    </li>
    <li onClick={() => openNewTab('https://www.xing.com/profile/Michael_Taggart6/cv')} aria-label="Check out my profile!">
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span ><FontAwesomeIcon icon={['fab', 'xing']} /></span>
    </li>
    <li onClick={() => openNewTab('https://docs.google.com/document/d/16NWvob6dIlHN5__NYBLA6xr-9eOmh8w6t8MRuMA8_10/edit?usp=sharing')} aria-label="Check out my resume!">
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span><FontAwesomeIcon icon={['fas', 'file-alt']} /></span>
    </li>
    <li><Link to='/about-me'>
     <span></span>
     <span></span>
     <span></span>
     <span></span>
     <span><FontAwesomeIcon icon={['fas', 'handshake']} /></span>
    </Link>
    </li>
   </ul>
  </div>
 )
}
export default Navigation