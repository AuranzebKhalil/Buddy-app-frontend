import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { useGetsendUserStoryQuery } from "@/Store/Services/Story";

const Slider = () => {
  const { data, isLoading, error } = useGetsendUserStoryQuery();
  const [story, setStory] = useState(false);

  const datItems = () => {
    setStory(false);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 3, slidesToSlide: 1 },
    mobile: { breakpoint: { max: 767, min: 464 }, items: 2, slidesToSlide: 1 },
  };

  // Check if data is undefined
  if (!data) {
    return null; // or some loading indicator
  }

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
          const width = isMiddleItem ? "300px" : "300px";
          const height = isMiddleItem ? "400px" : "400px";

          return (
            <div
              className={`slider ${isMiddleItem ? "middle" : ""}`}
              key={currentIndex}
              onClick={() => setCurrentItem(currentIndex)}
              style={{ width, height }}
            >
              <Image
                src={data.data[currentIndex].story} // Assuming data is always defined
                alt="movie"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          );
        }}
      >
        {data.data.map((item, index) => (
          <div className="slider mt-3" key={index}>
            <Image
              style={{
                width: "100%",
                height: "300px",
                borderRadius: "10px",
                objectFit: "cover",
                objectPosition: "center",
                paddingLeft: "5px",
              }}
              src={item.story}
              alt="movie"
              width="300"
              height="400"
            />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "100px",
                  objectFit: "cover",
                  objectPosition: "center",
                  marginTop: "4px",
                }}
                src={item.userImg}
                alt=""
                width="32"
                height="32"
              />
              <p
                style={{ fontSize: "14px", fontWeight: "300", color: "black" }}
              >
                {item.userName}
              </p>
            </div>
          </div>
        ))}
      </Carousel>

      <div
        onClick={() => datItems()}
        style={{ position: "fixed", top: "80px", right: "0", margin: "10px" }}
      >
        <CloseIcon />
      </div>
    </div>
  );
};

export default Slider;
