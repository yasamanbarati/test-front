"use client";
import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "@/services/mock";
import { CarouselArrows, CarouselDots } from "@/helpers/carousel-dots";

const CarouselArrowsStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  "& .css-1c8jjiv-MuiSvgIcon-root": {
    width: {
      xs: "0.8em",
      mobileL: "1em",
    },
    height: {
      xs: "0.8em",
      mobileL: "1em",
    },
  },
  position: "absolute",
  bottom: "-108px",
};

const SlickSlider = () => {
  const carouselRef = useRef<Slider>(null);
  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  const settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
    ...CarouselDots({}),
  };

  return (
    <div className="slider-container w-full">
      <CarouselArrows
        onNext={handleNext}
        onPrevious={handlePrevious}
        RightIconMode={true}
        leftIconMode={true}
        LeftStyle={{
          ...CarouselArrowsStyle,
          left: "auto",
          right: "42px",
        }}
        RightStyle={{
          ...CarouselArrowsStyle,
          left: "42px",
        }}
      >
        <Slider ref={carouselRef} {...settings}>
          {sliderData.map((item, index) => (
            <Image
              key={index}
              alt={`Slide ${index + 1}`}
              src={item}
              width={400}
              height={400}
            />
          ))}
        </Slider>
      </CarouselArrows>
    </div>
  );
};

export default SlickSlider;
