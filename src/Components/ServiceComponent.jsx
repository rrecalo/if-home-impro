import React from 'react'

function ServiceComponent({img, name}) {
  return (
    <div className='w-[45%] md:w-[33%] relative border border-stone-500 rounded-md'>
          <img className='w-full h-full relative rounded-md' src={img} alt="interior_painting"/>
          <div className='w-full pl-2 pt-1 pb-2 h-10 absolute bottom-0 border-t border-stone-500 bg-stone-200 bg-opacity-75 backdrop-blur-md text-lg light_txt
          rounded-t-none rounded-b-md'>
            {name}
          </div>
        </div>
  )
}

export default ServiceComponent