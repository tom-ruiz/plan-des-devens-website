import React from "react";
import Carousel from "better-react-carousel";

export default function CarouselComponent() {
  return (
    <Carousel cols={2} rows={1} loop autoplay={3500} scrollSnap >
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=1"
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=2"
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=3"
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          width="100%"
          src="https://picsum.photos/800/600?random=4"
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
    </Carousel>
  );
}
