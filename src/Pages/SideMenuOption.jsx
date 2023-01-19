import React, {useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const SideMenuOption = ({link, name, active,...props}) => {

    const location = useLocation();
    
    useEffect(()=>{console.log(location)},[])

  return (

    <motion.div className='border-black border-l-4 h-12 flex justify-start items-center'
        initial={{opacity:0}}
        animate={location.pathname === link ? {opacity:1, borderLeft: '4px solid'} : {opacity:1, border: 'none'}}
        transition={{duration:0.5}}
        >
        <Link id="side_bar_link" to={link} className='py-2 pl-2 w-[100%] h-[100%]'>
        {name}
        </Link>
    </motion.div>
  )
}

export default SideMenuOption