import React from 'react'
import contact_img_bg from '../contact_img_bg.png'

const ContactPage = () => {
  return (
    <div className='flex flex-col pb-[0px]'>
      <div id="contact_header_img" className='mt-[50px] pb-[50px] flex flex-col border-black border-b justify-start items-center'
        style={{backgroundImage: `url(${contact_img_bg})`}}>

        <div id="contact_page_header" className='mx-auto sm:text-7xl text-6xl font-semibold pt-[50px] mt-10 text-white'>
        Contact Us
        </div>
        <div id='' className='mx-auto text-center sm:text-3xl text-2xl superlight_txt pt-2 text-white'>
        Any questions, concerns, and job inquiries are welcome
        </div>

        <div id="contact_form" className='border-black border bg-stone-100 sm:w-[50%] w-10/12 h-[350px] mt-8'>
          <form className='flex flex-col w-[90%] mx-auto mt-8'>
            <div className='flex flex-row justify-center'>
              <label className='w-[100%]'>
                <input className='w-[90%] p-1' type="text" name="name" placeholder="Name" />
              </label>
              <label  className='w-[100%]'>
                <input className='w-[90%] p-1' type="text" name="email" placeholder="Email address" />
              </label>
            </div>
            <label className='mt-4'>
              <textarea className='w-[95%] p-1 h-[150px] max-h-[200px]' name="message" placeholder="Message" />
            </label>
            <label className='flex flex-row justify-center pt-4 pb-4'>
              <input type='submit' name='submit' value="Submit" className='pfd bg-black px-6 py-1 text-white text-lg'/>
            </label>
          </form>
        </div>

        <div className='mt-12 pfd text-4xl text-white'>
        Want to Call Instead?
        </div>
        <div className='mt-2 hvn text-xl light_txt text-white w-10/12 mx-auto text-center'>
        Feel free to call or text <span className='font-medium'>678-360-2882</span> between the hours of 9AM-6PM Eastern Standard Time
        </div>
      </div>


    </div>
  )
  
}

/**
 * 
 */

export default ContactPage