import React from 'react'
import services_header_img from '../../Images/services_header_img.png'
import paint_roller from '../../Images/paint_roller.png'
import wood_stack from '../../Images/wood_stack.png'
import tile_bathroom from '../../Images/tile_bathroom.png'

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

      <div id="quality_content" className='flex sm:flex-row flex-col w-[100%] sm:mt-[100px] mt-[175px] justify-center'>
            <div id="paint_roller_img" className='flex bg-stone-100 sm:w-[50%] w-[100%] sm:h-[600px] h-[250px] border-black border'
              style={{backgroundImage: `url(${paint_roller})`}}>
            </div>
            <div className='flex flex-col bg-stone-100 col-sp items-center justify-start sm:w-[50%] w-[100%] border-black border border-r-0 sm:pb-0 pb-[25px]'>
                <div className='w-[90%] text-left'>
                  <div className='sm:text-6xl text-5xl pfd font-semibold mt-12'>Painting</div>
                    <div className='sm:text-4xl text-3xl pfd mt-8'>Exterior</div>
                      <div className='sm:text-2xl text-xl light_txt hvn mt-2'>
                      Brick, siding, stucco and more.
                      Got a problem? - we've got a paint sprayer
                      </div>

                  <div className='text-4xl pfd mt-8'>Interior</div>
                    <div className='sm:text-2xl text-xl light_txt hvn mt-2'>
                    Whether its an accent wall, storage closet, or baby nursery, we'll get it coated
                  </div>
                </div>

            </div>
            
        </div>

        <div id="quality_content" className='flex sm:flex-row flex-col w-[100%] sm:mt-[100px] mt-[175px]  justify-center'>
            
            <div className='flex flex-col bg-stone-100 col-sp items-center justify-start sm:w-[50%] w-[100%] border-black border border-r-0 pb-[50px]'>
                <div className='w-[90%] text-left'>
                  <div className='sm:text-6xl text-5xl pfd font-semibold mt-12'>Basic Carpentry</div>
                    
                  <div className='sm:text-4xl text-3xl pfd mt-8'>New Storage</div>
                    <div className='sm:text-2xl text-xl light_txt hvn mt-2'>
                    We’ll install new shelves, or upgrade your existing ones
                    </div>

                    <div className='sm:text-4xl text-3xl pfd mt-8'>Flooring</div>
                    <div className='sm:text-2xl text-xl light_txt hvn mt-2'>
                    We’ll roll out fresh carpet or install LVP for you, but we don’t do hardwood
                    </div>
                  
                    <div className='sm:text-4xl text-3xl pfd mt-8'>Trim / Casing</div>
                    <div className='sm:text-2xl text-xl light_txt hvn mt-2'>
                    Finally want rid of your vintage stained trim? We’ll handle it - from the miter saw to the paintbrush
                    </div>

                  </div>

                  

            </div>
            <div id="wood_stack_img" className='flex bg-stone-100 sm:w-[50%] w-[100%] sm:h-[750px] h-[250px] border-black border'
              style={{backgroundImage: `url(${wood_stack})`}}>
            </div>
        </div>

        <div id="quality_content" className='flex sm:flex-row flex-col w-[100%] sm:mt-[100px] mt-[175px] justify-center'>
            <div id="tile_bath_img" className='flex bg-stone-100 sm:h-[650px] h-[250px] sm:w-[50%] w-[100%] border-black border'
              style={{backgroundImage: `url(${tile_bathroom})`}}>
            </div>
            <div className='flex flex-col bg-stone-100 col-sp items-center justify-start sm:w-[50%] w-[100%] border-black border border-r-0 sm:pb-0 pb-[25px]'>
                <div className='w-[90%] text-left'>
                  <div className='sm:text-6xl text-5xl pfd font-semibold mt-12'>Tile Work</div>
                    <div className='sm:text-4xl text-3xl pfd mt-8'>Backsplash</div>
                      <div className='sm:text-2xl text-xl light_txt hvn mt-2'>
                      Give your kitchen a revitalized look with a newly tiled backsplash
                      </div>

                  <div className='sm:text-4xl text-3xl pfd mt-8'>Bathroom tile</div>
                    <div className='sm:text-2xl text-xl light_txt hvn mt-2'>
                    As custom as you want, we’ll install bathroom tiles from floor to ceiling (showers too)
                  </div>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default ServicesPage