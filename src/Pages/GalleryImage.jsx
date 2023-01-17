import React from 'react'

const GalleryImage = ({img, ...props}) => {

    switch (img){
    case 1 : return (<img className='gallery_img' src={require("../gallery/gallery1.png")} alt="gallery_image" />)
    case 2 : return (<img className='gallery_img' src={require("../gallery/gallery2.png")} alt="gallery_image" />)
    case 3 : return (<img className='gallery_img' src={require("../gallery/gallery3.png")} alt="gallery_image" />)
    case 4 : return (<img className='gallery_img' src={require("../gallery/gallery4.png")} alt="gallery_image" />)
    case 5 : return (<img className='gallery_img' src={require("../gallery/gallery5.png")} alt="gallery_image" />)
    case 6 : return (<img className='gallery_img' src={require("../gallery/gallery6.png")} alt="gallery_image" />)
    case 7 : return (<img className='gallery_img' src={require("../gallery/gallery7.png")} alt="gallery_image" />)
    }

}

//<img src={require("../gallery/gallery1.png")}/>

export default GalleryImage