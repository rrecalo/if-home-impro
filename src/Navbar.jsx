import React from 'react'
import {ReactComponent as Logo} from './logo.svg';

const Navbar = () => {
  return (
    <div id="navbar" className="fixed flex w-full h-[80px] bg-stone-100 items-center justify-center border-black border-b">
      <div className="flex gap-6 w-[90%] justify-between">
      <Logo id="logo" className="mr-[40%]"/>
      <div className='flex items-end gap-8 lg:gap-24 lg:mr-[10%]'>
      <div className="navoption">
        Contact
      </div>
      <div className="navoption">
        Services
      </div>
      <div className="navoption">
        Gallery
      </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar