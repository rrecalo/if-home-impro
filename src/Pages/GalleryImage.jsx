import React from 'react'

const GalleryImage = ({url, alt,...props}) => {

    return (<img className='gallery_img' src={url} alt={alt} />)
    }

export default GalleryImage