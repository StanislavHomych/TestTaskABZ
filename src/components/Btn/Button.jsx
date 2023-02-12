import React from 'react'
import './button.scss';
import { useSelector } from 'react-redux';

const Button = ({ children, bigSize, disableBtn=false, identifier = "", handleClick = () => { return null } }) => {

  const data = useSelector((state) => { return state.usersSlice });
  
  let disableBtnSignup;
  if(data.isNameFieldValid && data.isEmailFieldValid && data.isPhoneFieldValid && data.isFileFieldValid && data.userProfile.positionId != 0){
    disableBtnSignup = false;
  }else{
    disableBtnSignup = true;
  }

  return (
    <button id={identifier}  disabled={disableBtn == true ? disableBtnSignup :false} className={bigSize ? 'btn-large' : 'btn'} onClick={(e)=>{e.preventDefault; handleClick()}}>{children}</button>
  )
}

export default Button