import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slides.css'

function Slides() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
  return (
    <>

     <Slider {...settings} className='p-3'>
      <div>
        <img src="slide1.png" alt="Image 1" style={{width:'100%'}} />
      </div>
      <div>
        <img src="slide2.png" alt="Image 2"style={{width:'100%'}} />
      </div>
     </Slider>
    </>
  )
}

export default Slides