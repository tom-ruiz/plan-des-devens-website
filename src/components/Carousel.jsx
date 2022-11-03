import React from "react";
import Carousel from "better-react-carousel";

export default function CarouselComponent() {
  return (
    <Carousel cols={2} rows={1} loop autoplay={3000}>
    <Carousel.Item>
        <img
          src={require("../img/home/arbre.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../img/home/carousel2.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
           src={require("../img/home/carousel3.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../img/gites/Bien-être/bien-être4.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../img/gites/Tendresse/tendresse1.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../img/gites/Volupté/volupté3.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../img/gites/Quiétude/quiétude15.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../img/home/ping-pong.jpg")}
          alt="img"
          className="carousel__img"
        />
      </Carousel.Item>
    </Carousel>
  );
}
