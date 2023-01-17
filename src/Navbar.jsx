import React from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './logo.svg';

const Navbar = () => {
  return (
    <div id="navbar" className="fixed flex w-full h-[80px] bg-stone-100 items-center justify-center border-black border-b z-50">
      <div className="flex gap-6 w-[90%] justify-between">
      <Link to="/">
      <Logo id="logo" className="mr-[40%]"/>
      </Link>
      <div className='flex items-end gap-8 lg:gap-24 lg:mr-[10%]'>
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
      </div>
    </div>
  )
}

export default Navbar