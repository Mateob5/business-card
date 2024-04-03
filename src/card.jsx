import React, { useState } from 'react';
import profile from './goku-profile.png'
import { FaLinkedin,FaSquareFacebook, FaSquareInstagram, FaSquareXTwitter, FaSquareGithub } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";
import showText from './showText';

export default function Card() {

  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(showText());
  }

  return (
    <>
      <div className="card">
        <div>
          <img className="profile-photo" src={profile} alt="goku profile photo"/>
        </div>
        <div>
          <h1>Son Gokū</h1>
          <p className="profesion">Software Engineer</p>
          <p className="page"><a href="https://dragonball.com">dragonball.com</a></p>
          <div className='button-container'><button onClick={handleButtonClick}><div className='mail-icon'><HiMail/></div>Email</button></div>
        </div>
        <div className='info'>
          <div>
            <h2>About</h2>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada nunc vel dolor venenatis, in interdum nulla dapibus. Quisque ac est in purus ultrices elementum. Integer ut cursus leo.</p>
          </div>
          <div>
            <h2>Interests</h2>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent malesuada nunc vel dolor venenatis, in interdum nulla dapibus. Quisque ac est in purus ultrices elementum. Integer ut cursus leo.</p>
          </div>
        </div>
        <div className="bottom-links">
          <div className='media-icons first-media-icon'><FaLinkedin /></div>
          <div className='media-icons'><FaSquareFacebook /></div>
          <div className='media-icons'><FaSquareInstagram /></div>
          <div className='media-icons'><FaSquareXTwitter /></div>
          <div className='media-icons'><FaSquareGithub /></div>
        </div>
      </div>
    </>
  )
}