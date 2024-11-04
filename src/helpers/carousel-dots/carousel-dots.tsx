"use client";
// @ts-nocheck
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

interface RootStyleProps {
  rounded?: boolean;
}

const RootStyle = styled(Box, {
  shouldForwardProp: (prop) => prop !== "rounded",
})<RootStyleProps>(({ rounded, theme }) => ({
  display: "flex",
  listStyle: "none",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  left: "0",
  bottom: "-20px",
  width: "100%",
  height: "100%",
  "& li": {
    width: "15px!important",
    height: "15px!important",
    opacity: 0.1,
    cursor: "pointer",
    "& span": {
      background: "transparent",
      border: "2px solid blue",
    },
  },
  "& li.slick-active": {
    opacity: 1,
    "& span": {
      background: "blue",
      border: "2px solid blue",
    },
    ...(rounded && {
      "& .dotActive": {
        width: 16,
        borderRadius: 6,
      },
    }),
  },
}));

const DotWrapStyle = styled("div")(() => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const DotStyle = styled("span")(({ theme }) => ({
  width: 15,
  height: 15,
  [theme.breakpoints.down(700)]: {
    width: 12,
    height: 12,
  },
  borderRadius: "50%",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.short,
  }),
}));

export const CarouselDots = (props: any) => {
  const rounded = props?.rounded || false;

  return {
    appendDots: (dots: any) => (
      <div>
        <RootStyle rounded={rounded} component="ul" {...props}>
          {dots}
        </RootStyle>
      </div>
    ),
    customPaging: () => (
      <DotWrapStyle>
        <DotStyle
          className="dotActive"
          sx={{
            bgcolor: "blue",
          }}
        />
      </DotWrapStyle>
    ),
  };
};
