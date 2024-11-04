"use client";
import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderData } from "@/services/mock";
import { CarouselArrows, CarouselDots } from "@/helpers/carousel-dots";
import { styled } from "@mui/material";

const SliderContent = styled(Slider)(({theme}) => ({
  [theme.breakpoints.down(700)]:{
    "& .slick-list": {
      height: "460px",
    },
    "& .slick-slide.slick-active.slick-current": {
      display: "flex",
      justifyContent: "center",
      height: "400px",
      "& div": {
        width: "80%",
        height: "100%",
        "& img": {
          width: "100%",
          height: "100%",
        },
      },
    },
  },
  "& .slick-slide.slick-active": {
    transform: "scale(0.7)",
    filter: "opacity(0.5)",
  },
  "& .slick-slide.slick-active.slick-current": {
    transform: "scale(1)",
    filter: "opacity(1)",
  },
}));

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

  const Settings = {
    className: "center",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
          right: "32px",
        }}
        RightStyle={{
          ...CarouselArrowsStyle,
          left: "32px",
        }}
      >
        <SliderContent ref={carouselRef} {...Settings}>
          {sliderData.map((item, index) => (
            <Image
              key={index}
              alt={`Slide ${index + 1}`}
              src={item}
              width={400}
              height={400}
            />
          ))}
        </SliderContent>
      </CarouselArrows>
    </div>
  );
};

export default SlickSlider;
