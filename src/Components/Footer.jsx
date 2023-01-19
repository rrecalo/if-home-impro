import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='bg-neutral-100 pt-[25px] pb-[25px] flex justify-center items-center'>

        


        <div className='lg:w-3/12 w:6/12 h-4/6 flex flex-col'>
            <div className='flex flex-row items-start justify-between'>
                <div className='flex flex-col items-start justify-start '>
                    <div className='text-sm pfd font-semibold pb-2'>Contact Info</div>
                    <div className='text-xs pb-1 font-light'>ifhomeimpro@gmail.com</div>
                    <div className='text-xs font-light'>678-360-2882 <span className='light_txt'>(9AM-6PM)</span></div>
                </div>
                
                

                <div className='flex flex-col items-start justify-start'>
                    <div className='text-sm pfd font-semibold pb-2'>Privacy and Liability</div>
                    <div className='text-xs pb-1 font-light'><Link to="/privacy">Privacy Policy</Link></div>
                    <div className='text-xs font-light'><Link to="/tos">Terms of Service</Link></div>
                </div>

            </div>
            <div className='h-full flex flex-col items-center justify-center pt-[20px]'>
                    <div className='text-xs pfd'>
                        © 2023 Ilie and Florica Home Improvements LLC
                    </div>
                </div>
        </div>
    </div>
  )
}
//<Logo className='w-[48px] h-[30px]'/>

export default Footer