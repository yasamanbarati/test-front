"use client";
import SwiperSlider from "@/components/slick";
import { styled } from "@mui/material";
import React from "react";

const TitleHeader = styled("h1")(() => ({
  position: "relative",
  zIndex: "3",
  "& img": {
    position: "absolute",
    width: "70%",
    height: "50%",
    top: "18px",
    zIndex: "-1",
  },
}));

const ProjectSlider = () => {
  return (
    <div className="container mx-auto bg-white flex flex-col items-center justify-between my-6 gap-y-28 md:gap-1">
      <TitleHeader className="text-xl font-bold text-dark-600 p-4 rounded-lg">
        پروژه ها
        <img src="/images/yellow-blush.png" alt="blush" />
      </TitleHeader>
      <SwiperSlider />

      <div className="flex justify-center mt-14">
        <button className="bg-blue-600 text-base font-normal text-white py-2 px-4 rounded">
          جزئیات پروژه
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
