import './Header.scss';
import logo from '../../assets/Logo.svg';
import Button from '../Btn/Button';
import { Link } from 'react-scroll';

import React from 'react'

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className='headerWrapper-inner'>
        <div className='logoWrapper'>
          <img src={logo} alt="" />
        </div>
        <div className='btnsHeader'>
          <Link to="users" spy={true} smooth={true} offset={50} duration={500}>
            <Button>Users</Button>
          </Link>
          <Link to="signup" spy={true} smooth={true} offset={50} duration={500}>
            <Button>Sign up</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header