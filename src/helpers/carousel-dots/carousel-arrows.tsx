"use client";
import { Fragment, ReactNode } from "react";
import { Box, SxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChevronRight, ChevronLeft } from "@mui/icons-material";

const buttonSize = 24;

const ArrowStyle = styled("div")(() => ({
  display: "flex",
  cursor: "pointer",
  width: buttonSize,
  height: buttonSize,
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "rgba(255,255,255,0.7)",
  "& svg": {
    backgroundColor: "#eff1fa",
    borderRadius: "50%",
    boxShadow: "0px 0px 1px 1px #e2e2e2",
    fontSize: "1.8rem",
  },
}));

interface CarouselArrowsTypes {
  onNext: () => void;
  children: ReactNode;
  RightStyle?: SxProps;
  LeftStyle?: SxProps;
  onPrevious: () => void;
  leftIconMode: boolean;
  RightIconMode: boolean;
}

export function CarouselArrows({
  onNext,
  children,
  onPrevious,
  leftIconMode,
  RightIconMode,
  LeftStyle,
  RightStyle,
  ...other
}: CarouselArrowsTypes) {
  return (
    <Fragment>
      <Box {...other} sx={{ position: "relative" }}>
        {children}

        <Box sx={{ ...LeftStyle }}>
          <ArrowStyle onClick={onNext}>
            {leftIconMode === true && (
              <ChevronLeft sx={{ fontSize: "2.5rem" }} />
            )}
          </ArrowStyle>
        </Box>

        <Box sx={{ ...RightStyle }}>
          <ArrowStyle onClick={onPrevious}>
            {RightIconMode === true && (
              <ChevronRight sx={{ fontSize: "2.5rem" }} />
            )}
          </ArrowStyle>
        </Box>
      </Box>
    </Fragment>
  );
}
