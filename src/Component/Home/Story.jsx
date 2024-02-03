// Slider.js

import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Img from '../../assets/StoryReelPictures/story2.jpg'

const Slider = () => {
  const [sliderImageUrl, setStoryPostdata] = useState([1,1,1,1,1,1,1,1,1]);
  const [story, setStory] = useState(false);
  
  const data = () => {
    setStory(false);
  };

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 1 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 3, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 767, min: 464 }, items: 2, slidesToSlide: 1 },
  };

  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        customRenderItem={(currentIndex, state, setCurrentItem) => {
          const isMiddleItem = currentIndex === state.currentSlide;
          const width = isMiddleItem ? '300px' : '200px';
          const height = isMiddleItem ? '400px' : '300px';

          return (
            <div
              className={`slider ${isMiddleItem ? 'middle' : ''}`}
              key={currentIndex}
              onClick={() => setCurrentItem(currentIndex)}
              style={{ width, height }}
            >
              <Image
                src={sliderImageUrl[currentIndex].Images}
                alt="movie"
                style={{ width: '300px', height: '400px' }}
              />
            </div>
          );
        }}
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="slider mt-3" key={index}>
            <Image
              style={{ width: '200px', height: '300px', borderRadius: '10px' }}
              src={Img}
              alt="movie"
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                justifyContent: 'center',
              }}
            >
              <Image
                style={{ width: '32px', height: '32px', borderRadius: '100px' }}
                src={Img}  
                alt=""
              />
              <p style={{ fontSize: '14px', fontWeight: '300', color: 'black' }}>
                Name
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      <div onClick={() => data()} style={{ position: 'fixed', top: '80px', right: '0', margin: '10px' }}>
        <CloseIcon />
      </div>
    </div>
  );
};

export default Slider;
