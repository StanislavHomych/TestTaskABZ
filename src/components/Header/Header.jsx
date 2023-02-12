import './Header.scss';
import logo from '../../assets/Logo.svg';
import Button from '../Btn/Button';

import React from 'react'

const Header = () => {
  return (
    <div className='headerWrapper'>
        <div className='logoWrapper'>
            <img src={logo} alt="" />
        </div>
        <div className='btnsHeader'>
            <Button>Users</Button>
            <Button>Sign up</Button>
        </div>
    </div>
  )
}

export default Header