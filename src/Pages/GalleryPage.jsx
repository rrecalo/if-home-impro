import React, {useEffect} from 'react'
import GalleryImage from './GalleryImage'
import gallery_header_img from '../gallery_header_img.png'
import { motion } from 'framer-motion'
import { pageAnim } from '../AnimUtility'
import { useQuery } from '@apollo/client'
import { GET_GALLERY_IMAGES} from '../queries.js'

const GalleryPage = () => {

  const {loading, error, data} = useQuery(GET_GALLERY_IMAGES);


  return (
    <motion.div className='flex flex-col justify-center pb-[200px]'
    variants={pageAnim} initial="initial" animate="animate">
      <div id="contact_header_img" className='mt-[50px] pb-[50px] flex flex-col border-black border-b justify-start items-center'
        style={{backgroundImage: `url(${gallery_header_img})`}}>

        <div id="contact_page_header" className='mx-auto text-7xl font-semibold pt-[50px] mt-10 text-white'>
        Gallery
        </div>
        <div id='' className='mx-auto text-center text-3xl superlight_txt pt-2 text-white'>
        A quick look at what our work looks like.
        </div>
      </div>

      <div className='pt-[150px] sm:w-[90%] w-[95%] mx-auto flex flex-row flex-wrap justify-center sm:gap-10 gap-6  min-h-screen'>
        {
          data 
          ?
          data.galleryImages.map(obj =>{return (<GalleryImage url={obj.image.url} alt={obj.imageTitle} key={obj.imageTitle}/>)})
          : null
        }
      </div>
    </motion.div>
  )
}

export default GalleryPage