import React from "react";
import Carousel from "better-react-carousel";

export default function CarouselComponent() {
  return (
    <Carousel cols={2} rows={1} loop autoplay={3000}>
      <Carousel.Item>
        <img
          src={require("../img/gites/Bien-être/IMG-20220929-WA0007.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../img/gites/Tendresse/IMG_1083.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../img/gites/Volupté/IMG_1065.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../img/gites/Quiétude/IMG_1061.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
    </Carousel>
  );
}
