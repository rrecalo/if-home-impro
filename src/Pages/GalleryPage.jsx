import React from 'react'
import GalleryImage from './GalleryImage'
import gallery_header_img from '../gallery_header_img.png'

const GalleryPage = () => {


  return (

    <div className='flex flex-col justify-center pb-[200px]'>
      <div id="contact_header_img" className='mt-[50px] pb-[50px] flex flex-col border-black border-b justify-start items-center'
        style={{backgroundImage: `url(${gallery_header_img})`}}>

        <div id="contact_page_header" className='mx-auto text-7xl font-semibold pt-[50px] mt-10 text-white'>
        Gallery
        </div>
        <div id='' className='mx-auto text-center text-3xl superlight_txt pt-2 text-white'>
        A quick look at what our work looks like.
        </div>
      </div>

      <div className='pt-[150px] sm:w-[90%] w-[95%] mx-auto flex flex-row flex-wrap justify-center sm:gap-10 gap-6'>
        <GalleryImage img={1}/>
        <GalleryImage img={2}/>
        <GalleryImage img={3}/>
        <GalleryImage img={4}/>
        <GalleryImage img={5}/>
        <GalleryImage img={6}/>
      </div>
    </div>
  )
}

export default GalleryPage