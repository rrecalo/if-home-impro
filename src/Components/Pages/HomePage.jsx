import React from 'react'
import hero_img from '../../Images/hero_img.png'
import kitchen_img from '../../Images/kitchen_img.jpg'
import xp_bg from '../../Images/xp_bg.jpg'
import cta_img from '../../Images/cta_img.jpg'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
import { pageAnim } from '../AnimUtility'


const HomePage = () => {
  return (
    <motion.div id="homepage" className='pt-[80px] pb-[200px] bg-stone-100'
    variants={pageAnim} initial="initial" animate="animate">
        <div id="hero_img" className='flex flex-col justify-start items-center bg-stone-100'
        style={{backgroundImage: `url(${hero_img})`}}>
            <div className='flex flex-col md:ml-[40%] ml-[5%]'>
            <div id="title" className='mt-8 sm:mt-4 px-4 py-1'>
                ILIE & FLORICA
            </div>
            <div id="subtitle" className=''>
                Expert Home Improvements that you can afford
            </div>
            <div className='flex justify-center'>
            <Link to='/contact' className='sm:w-[50%] w-[75%] px-6 sm:px-2'> 
                <button id='cta_btn' className='ml-[0%] bg-black text-white light_txt mt-6 h-12 w-[100%] md:text-xl opacity-90 lg:text-2xl text-lg rounded-lg'>
                    Book A Free Estimate
                </button>
            </Link>
            </div>
            
            </div>
        </div>

        <div id="quality_content" className='flex sm:flex-row flex-col w-[100%] justify-center pt-20 border-t border-stone-200'>
            <div className='flex flex-col bg-stone-100 col-sp items-center justify-center sm:w-[50%] w-[100%] sm:py-[0px] py-[50px]'>
                <div className='w-[90%] text-left'>
                    <div id="header1" className='text-5xl'>We take pride in our <span className='font-bold'>Quality.</span></div>
                    <div className='text-2xl light_txt mt-2'>So you can be sure that every inch gets coated, every nail gets covered, and every project gets completed</div>
                </div>
            </div>
            <div id="kitchen_img" className='flex bg-stone-100 sm:w-[45%] w-[100%] sm:rounded-lg'
            style={{backgroundImage: `url(${kitchen_img})`}}>
            </div>
        </div>

        <div id="xp_content" className='flex flex-row justify-center mt-20 mb-20 border-t border-b border-stone-200'>
        
            <div id="xp_img" className='flex bg-stone-100 w-[100%] justify-center'
            style={{backgroundImage: `url(${xp_bg})`}}>
                <div className='flex flex-col w-[90%] justify-center text-left ml-[5%]'>
                    <div id="xp_header" className='sm:text-8xl sm:text-5xl text-5xl'>
                    With <span className='font-bold'>20 years</span> of experience, our expertise is <span className='font-bold'>unmatched.</span>
                    </div>
                    <div className='light_txt mt-4 ml-2 sm:text-4xl text-2xl'>
                        We’ve seen plenty over the years - there hasn’t been a problem we couldn’t solve
                    </div>
                </div>
            </div>
        </div>

        <div id="quality_content" className='flex sm:flex-row flex-col w-[100%] sm:mt-[100px] mt-[150px] justify-center'>
            <div id="kitchen_img" className='flex bg-stone-100 h-24 sm:w-[45%] w-[100%] sm:rounded-lg'
            style={{backgroundImage: `url(${cta_img})`}}>
            </div>
            <div className='flex flex-col bg-stone-100 col-sp items-center justify-center sm:w-[50%] w-[100%] sm:py-[0px] py-[50px]'>
                <div className='w-[90%] text-left'>
                    <div id="header1" className='text-5xl'>Got a new project in mind?</div>
                    <div className='text-2xl light_txt mt-2'>
                        We offer free estimates, and would love to take a look at any projects you want to start with us
                    </div>
                    <Link to='/contact' className='w-[25%]'> 
                    <button id='cta_btn' className='bg-black text-white mt-8 h-12 sm:w-[30%] w-[40%] lg:text-2xl md:text-xl text-xl rounded-lg'>
                        Contact Us
                    </button>
                    </Link>
                </div>
            </div>
            
        </div>

    </motion.div>
  )
}

export default HomePage