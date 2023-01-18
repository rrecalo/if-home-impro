import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from './logo.svg';
import {FiMenu} from 'react-icons/fi'
import {motion} from 'framer-motion'
import {useAnimationControls} from 'framer-motion'

var menuVariants = {
  shown:{
    x:0,
    transition:{
      duration: 0.5, type: "tween"
    }
  },
  notShown:{
    x:300,
    transition:{
      duration: 0.5, type: "tween"
    }
  }
}

const Navbar = () => {

  const [shown, setShown] = useState(false);
  const controls = useAnimationControls("notShown");
  const ref = useRef(null);
  useOutsideAlerter(ref, shown);

  function toggleMenu(){
    if(shown){
      controls.start("notShown");
      setTimeout(()=>{
        setShown(false);
      }, 500);
    }
    else{
      setShown(true);
      controls.start("shown");
    }
  }

  /**
 * Hook that alerts clicks outside of the passed ref
 */
  function useOutsideAlerter(ref, shown) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target) && shown) {
          toggleMenu();
        }
      }
      // Bind the event listener
      document.body.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.body.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref, shown]);
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

      <motion.div id="side_nav" ref={ref} className={"fixed top-[80px] flex-col right-0 w-2/6 bg-neutral-100 opacity-95 h-full justify-start items-left text-2xl font-light gap-4 p-1 pl-2 pt-[25px] " + (shown ? 'flex' : 'hidden')}
      onClick={toggleMenu}
      variants={menuVariants}
      initial={"notShown"}
      animate={controls}>
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
      </motion.div>

      </div>
    </div>
  )
}

export default Navbar