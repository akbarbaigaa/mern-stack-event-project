import React from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';

const Navbars = () => {
  const [show, setShow] = useState(false);
  return (
    <nav>
      <div className="logo">KING'S</div>
      <div className={show ? 'navLinks showmenu' : 'navLinks'}>
        <div className="links">
          <Link to="hero" spy={true} smooth={true} duration={500}>
            HOME
          </Link>
          <Link to="services" spy={true} smooth={true} duration={500}>
            SERVICES
          </Link>
          <Link to="about" spy={true} smooth={true} duration={500}>
            ABOUT
          </Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            CONTACT
          </Link>
        </div>
      </div>
      <div className='hamburger' onClick={()=> setShow(!show)}>
        <GiHamburgerMenu/>
      </div>
    </nav>
  );
};

export default Navbars;
