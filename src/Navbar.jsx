import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './logo.svg';
import {FiMenu} from 'react-icons/fi'

const Navbar = () => {

  const [shown, setShown] = useState(false);

  function toggleMenu(){
    setShown(!shown);
  }

  return (
    <div id="navbar" className="fixed flex w-full h-[80px] bg-stone-100 items-center justify-center border-black border-b z-50">
      <div className="flex gap-6 w-[90%] justify-between">
      <Link to="/">
      <Logo id="logo" className="mr-[40%]"/>
      </Link>
      <div className='hidden sm:flex items-end gap-8 lg:gap-24 lg:mr-[10%]'>
      <Link to="/about" className="navoption">
        About
      </Link>
      <Link to="/contact" className="navoption">
        Contact
      </Link>
      <Link to="/services" className="navoption">
        Services
      </Link>
      <Link to="/gallery" className="navoption">
        Gallery
      </Link>
      </div>

      <div className='sm:hidden flex justify-center items-center'>
        <FiMenu className='w-10 h-10' onClick={toggleMenu}/>
      </div>

      <div id="side_nav" className={"fixed top-[80px] flex-col right-0 w-1/2 bg-neutral-50 h-full justify-start items-left text-2xl font-light gap-4 p-1 pt-[25px] " + (shown ? 'flex' : 'hidden')}
      onClick={toggleMenu}>
      <Link to="/about" className='py-2'>
        About
      </Link>
      <Link to="/contact" className='py-2'>
        Contact
      </Link>
      <Link to="/services" className='py-2'>
        Services
      </Link>
      <Link to="/gallery" className='py-2'>
        Gallery
      </Link>
      </div>

      </div>
    </div>
  )
}

export default Navbar