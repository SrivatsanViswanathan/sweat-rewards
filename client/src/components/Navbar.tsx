import { useState, useEffect } from 'react';
import { links } from '../utils/links';
import { Link } from 'react-router-dom';
import Wrapper from '../css/Navbar';
import logo from '../assets/images/sweat.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(window.innerWidth > 768);
  const [isToggle, setToggle] = useState(false);

  const toggleLinks = () => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
      setShowLinks(!showLinks);
      setToggle(!isToggle);
    }
  };
  useEffect(() => {
    const handleResize = () => {
      setShowLinks(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Wrapper>
      <div className='nav-center'>
        <div className='nav-header'>
          <a href='https://sweateconomy.com' target='_blank'>
            <img className='img' src={logo} alt='logo' />
          </a>
          <button
            className={isToggle ? 'nav-toggle toggled' : 'nav-toggle'}
            onClick={toggleLinks}
            aria-label='Navbar Toggle'
          >
            <div className='navbar-toggle'>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
        <div
          className={
            showLinks ? 'links-container show-container' : 'links-container'
          }
        >
          <ul className='links'>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <Link to={url} onClick={toggleLinks}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
