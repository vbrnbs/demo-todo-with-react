import React from 'react'
import logo from '../images/logo512.png';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  return (
    <div className='w-screen h-12 fixed flex justify-around items-center text-6xl bg-white'>
        <MenuIcon className='h-10 hover: cursor-pointer'/>
        <img src={logo} alt='logo' 
        className='h-10 hover: cursor-pointer'
        />
        <AccountCircleIcon className='h-10 hover: cursor-pointer'/>        
    </div>
  )
}

export default Header