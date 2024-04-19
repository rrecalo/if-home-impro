import React from 'react'
import contact_img_bg from '../../Images/contact_img_bg.jpg'
import {motion } from 'framer-motion'
import { pageAnim } from '../AnimUtility'
import ContactForm from '../ContactForm'

const ContactPage = () => {

  return (
    <motion.div className='flex flex-col pb-[0px]'
    variants={pageAnim} initial="initial" animate="animate">
      <div id="contact_header_img" className='mt-[50px] pb-[50px] h-[1000px] flex flex-col border-black border-b justify-start items-center'
        style={{backgroundImage: `url(${contact_img_bg})`}}>

        <div id="contact_page_header" className='mx-auto sm:text-7xl text-6xl font-semibold pt-[50px] mt-10 text-white'>
        Contact Us
        </div>
        <div id='' className='mx-auto text-center sm:text-3xl text-2xl superlight_txt pt-2 text-white'>
        Any questions, concerns, and job inquiries are welcome
        </div>

        <div className='w-[90%] sm:w-[50%] mt-10'> 
          <ContactForm />
        </div>
      
    
      </div>

    </motion.div>
  )
  
}

export default ContactPage