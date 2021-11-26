import React from 'react';
import { Carousel } from 'react-bootstrap';
// style
import './Carrousel.css';

type CarrouselProps = {
  slide1: string;
  slide2: string;
  slide3: string;
  children: React.ReactNode;
};

const Carrousel = ({ slide1, slide2, slide3, children }: CarrouselProps) => {
  return (
    <>
      <header>
        <Carousel>
          <Carousel.Item>
            <img className={slide1} src={slide1} alt="" /> {children}
          </Carousel.Item>
          <Carousel.Item>
            <img className={slide2} src={slide2} alt="" /> {children}
          </Carousel.Item>
          <Carousel.Item>
            <img className={slide3} src={slide3} alt="" /> {children}
          </Carousel.Item>
        </Carousel>
      </header>
    </>
  );
};

export default Carrousel;
