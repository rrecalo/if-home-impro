import React from 'react'
import hero_img from './hero_img.png'
import kitchen_img from './kitchen_img.png'
import xp_bg from './xp_bg.png'
import cta_img from './cta_img.png'
import { Link } from 'react-router-dom'



const Homepage = () => {
  return (
    <div id="homepage" className='pt-[80px] pb-[200px]'>
        <div id="hero_img" className='flex flex-col border-black border-b justify-start items-center'
        style={{backgroundImage: `url(${hero_img})`}}>
            <div className='flex flex-col md:ml-[40%] ml-[10%]'>
            <div id="title" className=''>
            ILIE & FLORICA
            </div>
            <div id="subtitle" className=''>
            Expert Home Improvements that you can afford
            </div>
            <div className='flex justify-center'>
            <Link to='/contact' className='sm:w-[50%] w-[75%]'> 
            <button id='cta_btn' className='ml-[0%] bg-black text-white light_txt mt-8 h-12 w-[100%] sm:text-2xl opacity-90 sm:text-2xl text-xl'>
                Get Your Free Estimate 
            </button>
            </Link>
            </div>
            
            </div>
        </div>

        <div id="quality_content" className='flex sm:flex-row flex-col w-[100%] sm:mt-[100px] mt-[150px] justify-center'>
            <div className='flex flex-col bg-stone-100 col-sp items-center justify-center sm:w-[50%] w-[100%] border-black border border-r-0 sm:py-[0px] py-[50px]'>
                <div className='w-[90%] text-left'>
                    <div id="header1" className='text-5xl'>We take pride in our <span className='font-bold'>Quality.</span></div>
                    <div className='text-2xl light_txt mt-2'>So you can be sure that every inch gets coated, every nail gets covered, and every project gets completed</div>
                </div>
            </div>
            <div id="kitchen_img" className='flex bg-stone-100 sm:w-[50%] w-[100%] border-black border'
            style={{backgroundImage: `url(${kitchen_img})`}}>
            </div>
        </div>

        <div id="xp_content" className='flex flex-row sm:mt-[100px] mt-[150px] justify-center'>
        
            <div id="xp_img" className='flex bg-stone-100 w-[100%] border-black border justify-center'
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
            <div id="kitchen_img" className='flex bg-stone-100 h-24 sm:w-[50%] w-[100%] border-black border'
            style={{backgroundImage: `url(${cta_img})`}}>
            </div>
            <div className='flex flex-col bg-stone-100 col-sp items-center justify-center sm:w-[50%] w-[100%] border-black border border-l-0 sm:py-[0px] py-[50px]'>
                <div className='w-[90%] text-left'>
                    <div id="header1" className='text-5xl'>Got a new project in mind?</div>
                    <div className='text-2xl light_txt mt-2'>
                        We offer free estimates, and would love to take a look at any projects you want to start with us
                    </div>
                    <Link to='/contact' className='w-[25%]'> 
                    <button id='cta_btn' className='bg-black text-white mt-8 h-12 sm:w-[25%] w-[40%] sm:text-2xl text-xl'>
                        Contact Us
                    </button>
                    </Link>
                </div>
            </div>
            
        </div>

    </div>
  )
}

export default Homepage