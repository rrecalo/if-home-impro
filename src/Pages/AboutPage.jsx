import React from 'react'
import about_header_img from '../about_header_img.png'

const AboutPage = () => {
  return (
    <div className='flex flex-col w-[100%] pb-[200px]'>
      <div id="about_header_img" className='mt-[50px] pb-[50px] flex flex-col border-black border-b justify-start items-center'
        style={{backgroundImage: `url(${about_header_img})`}}>
        <div id="contact_page_header" className='mx-auto text-7xl font-semibold pt-[50px] mt-10 text-white'>
        About Us
        </div>
      </div>

      <div className='flex flex-col mt-20 justify-center items-center'>
        <div className='bg-black sm:w-3/12 w-10/12'>
            <div className='text-white text-center sm:text-6xl text-5xl pfd py-3'>Our Story</div>
        </div>
        <div className='sm:w-9/12 w-10/12 sm:text-2xl text-xl mt-8 hvn light_txt'>
        <span className='font-normal'>Our story began in the small city of Reading, Pennsylvania over twenty short years ago.</span><br/>
        <br/>After emigrating Romania’s countryside to flee the oppression of the communist regime that was in power, we were newly-wed without little to no income. Following several years of poorly paying jobs, we decided to put the skills and knowledge we had inherited from both of our parents and began small remodeling jobs as a side-gig. 
        <br/><br/>Since then, we’ve been improving on our craft and honing our abilities in order to leave our customers happy. We’ve helped hundreds of clients see their visions fulfilled, and we are thankful for everyone that has been a part of our journey. 
        <span className='font-normal'><br/><br/>We truly believe that God has been with us every step of the way and we have seen his hand work daily in our lives providing daily bread for our family - we owe it all to him.</span>
        </div>
      </div>

      

    </div>
  )
}

export default AboutPage