import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Homecart from "../homecart/Homecart";
import { Button } from "@mui/material";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const Cartslide = (props) => {
  const { data, sectionName } = props;
  const [activeIndex, setActiveIndex] = useState(0);
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 4 },
    1920: { items: 6 },
  };

  const carouselRef = useRef(null);

  const slideNext = () => {
    if (carouselRef.current) {
      const nextIndex = Math.min(
        activeIndex + 1,
        props?.data?.length - responsive[1920].items || 0
      );
      setActiveIndex(nextIndex);
      carouselRef.current.slideTo(nextIndex);
    }
  };

  const slidePrev = () => {
    if (carouselRef.current) {
      const prevIndex = Math.max(activeIndex - 1, 0);
      setActiveIndex(prevIndex);
      carouselRef.current.slideTo(prevIndex);
    }
  };

  const items = props?.data?.map((item) => {
    return <Homecart Men={item} key={item.id} />;
  });

  return (
    <>
      <div className="relative px-4 lg:px-8">
        <h2 className="font-bold text-xl text-gray-800 py-5 ">{String(sectionName)}</h2>

        <div className="relative p-5">
          <AliceCarousel
            items={items}
            disableButtonsControls
            responsive={responsive}
            disableDotsControls
            activeIndex={activeIndex}
            startIndex={activeIndex}
            ref={carouselRef}
          />
          {activeIndex !== (props?.data?.length || 0) - 6 && (
            <Button
              onClick={slideNext}
              variant="contained"
              style={{
                position: "absolute",
                right: "25px",
                top: "8rem",
                transform: "translateX(50%) rotate(90deg)",
                backgroundColor: "white",
                color: "black",
              }}
              aria-label="next"
              className="z-20"
            >
              <KeyboardArrowLeft sx={{ transform: "rotate(90deg)" }} />
            </Button>
          )}
          {activeIndex !== 0 && (
            <Button
              onClick={slidePrev}
              variant="contained"
              style={{
                position: "absolute",
                left: "-3rem",
                top: "8rem",
                transform: "translateX(50%) rotate(90deg)",
                backgroundColor: "white",
                color: "black",
              }}
              aria-label="prev"
              className="z-20"
            >
              <KeyboardArrowRight sx={{ transform: "rotate(90deg)" }} />
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default Cartslide;
