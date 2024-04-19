import React from 'react'
import services_header_img from '../../Images/services_header_img.jpg'
import paint_roller from './../../Images/paint_roller.jpeg'
import siding from '../../Images/siding.jpeg'
import brick from '../../Images/brick.jpeg'
import cabinetry from '../../Images/cabinetry.jpeg'
import ServiceComponent from '../ServiceComponent'
import door from '../../Images/door.jpeg'
import deck from '../../Images/deck.jpeg'
import tile_shower from '../../Images/tile_shower.jpeg'
import backsplash from '../../Images/backsplash.jpeg'
import bathroom from '../../Images/bathroom.jpeg'
import floor from '../../Images/floor.jpeg'
import { Link } from 'react-router-dom'
import woodwork from '../../Images/woodwork.jpeg'

const ServicesPage = () => {
  return (
    <div className='flex flex-col w-[100%] pb-[200px]'>

      <div id="contact_header_img" className='mt-[50px] pb-[50px] flex flex-col border-black border-b justify-start items-center'
        style={{backgroundImage: `url(${services_header_img})`}}>
        <div id="contact_page_header" className='mx-auto sm:text-7xl text-6xl font-semibold pt-[50px] mt-10 text-white text-center'>
          Our Services
        </div>
        <div id='' className='mx-auto text-center sm:text-3xl text-2xl superlight_txt pt-2 text-white'>
          From painting, to carpentry to tiles - we’ve done it all
        </div>
      </div>

      <div id="header1" className='mt-20 mb-5 text-center text-3xl'>
        Interior and Exterior Painting
      </div>  

      <div className='w-full flex justify-center items-center'>
        <div className='sm:w-9/12 mx-auto h-fit mt-2 flex flex-wrap justify-around gap-1'>
          <ServiceComponent img={paint_roller} name={"Interior Walls"}/>
          <ServiceComponent img={door} name={"Doors & Trims"}/>
          <ServiceComponent img={cabinetry} name={"Custom/Accent Walls"}/>
          <ServiceComponent img={siding} name={"Exterior Siding"}/>
          <ServiceComponent img={brick} name={"Exterior Brick"}/>
          <ServiceComponent img={deck} name={"Wood Staining/Sealing"}/>
        </div>
      </div>

      <div id="header1" className='mt-20 mb-5 text-center text-3xl'>
        Tilework
      </div>  

      <div className='w-full flex justify-center items-center'>
        <div className='sm:w-9/12 mx-auto h-fit mt-2 flex flex-wrap justify-around gap-1'>
          <ServiceComponent img={tile_shower} name={"Showers"}/>
          <ServiceComponent img={bathroom} name={"Entire Bathroom"}/>
          <ServiceComponent img={backsplash} name={"Counter Backsplash"}/>
        </div>
      </div>

      <div id="header1" className='mt-20 mb-5 text-center text-3xl'>
        Miscellaneous
      </div>  

      <div className='w-full flex justify-center items-center'>
        <div className='sm:w-9/12 mx-auto h-fit mt-2 flex flex-wrap justify-around gap-1'>
          <ServiceComponent img={floor} name={"Vinyl Plank Flooring"}/>
          <ServiceComponent img={woodwork} name={"Custom woodwork"}/>
        </div>
      </div>


      <div id="header1" className='mt-40 mb-5 text-center text-3xl'>
        New Construction & Other
      </div>  
      <div className='text-2xl light_txt mt-2 mx-2 text-center'>
        Building a new home or need a service not listed above?<br/> We'll be able to help - let's chat!
      </div>
      <Link to='/contact' className='w-1/2 sm:w-[25%] mx-auto'> 
        <button id='cta_btn' className='w-full bg-black text-white mt-8 h-12 px-4 py-2 lg:text-2xl md:text-xl text-xl rounded-lg'>
            Contact Us
        </button>
      </Link>

      {/* <div className='mx-auto text-center sm:text-2xl text-xl pt-20'> 
        We specialize in painting services, and can meet a variety of other needs for your remodeling project - large or small
      </div> */}


    </div>
  )
}

export default ServicesPage