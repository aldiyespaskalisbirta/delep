"use client";
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";

function CarouselSlider() {
  return (
    <Carousel
      prevArrow={({ handlePrev }) => <div></div>}
      nextArrow={({ handleNext }) => <div></div>}
      navigation={({ setActiveIndex, activeIndex, length }) => <div></div>}
      autoplay={true}
      //   autoplayDelay={2000}
      loop={true}
      className="w-full"
    >
      <Image
        src="/assets/cappie1.jpeg"
        alt="cappie"
        fill
        className="object-cover"
      />
      <Image
        src="/assets/cappie2.jpeg"
        alt="cappie"
        fill
        className="object-cover"
      />
    </Carousel>
  );
}

export default CarouselSlider;
