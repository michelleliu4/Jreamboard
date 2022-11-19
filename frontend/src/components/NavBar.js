import React from "react";
import {Link} from "react-router-dom";
import jream from '../Images/jream.png'
import { Navbar } from "@nextui-org/react";

export default function NavBar() {
  return (
    <div>
      <header className='spaceBetween'>
        {/* <img className="logo" src={jream} alt="jream company logo"/> */}
          <nav>
               <div role="navigation" aria-label="Navigation Bar">
                  <ul className="links-nav">
                      <li><Link to="/feed" aria-label="Feed">Feed</Link></li>
                      <li><Link to="/searchProfile" aria-label="Search">Search</Link></li>
                      <li><Link to="/recordaudio" aria-label="Record Audio">Record Audio</Link></li>
                      <li><Link to="/profile" aria-label="Profile">Profile</Link></li>
                  </ul>
              </div>
          </nav>
      </header>
    </div>
  );
}