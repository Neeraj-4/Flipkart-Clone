import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { bannerData } from '../../constants/data';
import { styled } from '@mui/material'
const Image = styled('img')({
  width:'100%',
  height:280,
})
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Slider = () => {
  return (
<Carousel 
responsive={responsive}
swipeable={false}
draggable={false}
infinite={true}
autoPlay={true}
autoPlaySpeed={2000}
keyBoardControl={true}
slidesToSlide={1}
containerClass="carousel-container"
removeArrowOnDeviceType={["tablet","mobile"]}
itemClass="carousel-item-padding-40-px"

>
 
 {
  bannerData.map(data=>{
    return(
      <Image src={data.url} alt="Images"/>
    )
  })

 }



 </Carousel>
  )
}
export default Slider
