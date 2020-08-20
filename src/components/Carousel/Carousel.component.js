import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import "./Carousel.css";

const items = [
  {
    src:
      "https://user-images.githubusercontent.com/48627031/90132130-dfe87400-dd8a-11ea-9ab5-7fdb5d79ada8.jpg",
    altText: "Slide 1",
    caption: "Pratibha Milan",
  },
  {
    src:
      "https://user-images.githubusercontent.com/48627031/90132130-dfe87400-dd8a-11ea-9ab5-7fdb5d79ada8.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
  },
  {
    src:
      "https://user-images.githubusercontent.com/48627031/90132130-dfe87400-dd8a-11ea-9ab5-7fdb5d79ada8.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
  },
];

const Carousell = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, i) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={i}
      >
        <img className="carouselImage" src={item.src} alt={item.altText} />
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <>
      <section className="carouselPosition">
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          data-pause="hover"
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </section>
    </>
  );
};

export default Carousell;
