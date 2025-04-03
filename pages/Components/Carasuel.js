import { Carousel } from 'react-bootstrap';
import Image from 'next/image';
import Script from 'next/script'; // to import Bootstrap JS
import carsuel1 from "./Images/School.jpg"; // First image
import carsuel2 from "./Images/School2.jpg"; // Second image
import carsuel3 from "./Images/School3.jpg"; // Third image
const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100"
          src={carsuel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3>
          <p>Description for the first slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Second+Slide"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>Description for the second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400?text=Third+Slide"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third Slide</h3>
          <p>Description for the third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
