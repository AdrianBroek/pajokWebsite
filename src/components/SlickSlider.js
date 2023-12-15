import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination,Navigation } from 'swiper/modules';

export default function SlickSlider(props) {
  
  console.log(props)
  return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        {props.props?.map((video)=> (
        <SwiperSlide>
          <Iframe
            // className="noselect"
            frameBorder="none"
            src={video}
            loading="lazy"
            title="vimeo-player" 
            width="500"
            // allowFullScreen
          >
          </Iframe>
        </SwiperSlide>
      ))}
      </Swiper>
  );
}

const Video = styled.div`
  height: 500px;
  width: 100%;
  background-color: red;
  position: relative;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`
const Iframe = styled.iframe`
  width:100%;
  height: 100%;
`