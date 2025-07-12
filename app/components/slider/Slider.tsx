import React, { useState } from "react";
import "./slider.styles.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

interface SliderProps {
  images: string[];
}

export default function Slider({ images }: SliderProps) {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      {/* <div className="navigation-wrapper w-full max-w-screen-xl mx-auto"> */}
      <div className="navigation-wrapper w-full mx-auto">
        <div ref={sliderRef} className="keen-slider">
          {images.map((src, index) => (
            <div key={index} className="keen-slider__slide flex justify-center">
              <div
                className="
            relative 
            w-full 
            max-w-[1200px]
            aspect-[16/9] 
            border-2 
            border-brand-borderLight 
            rounded-sm 
            overflow-hidden
            max-h-[70vh]   // ✅ Limita la altura en pantallas grandes
          "
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 1536px) 1200px, (min-width: 1280px) 1000px, (min-width: 1024px) 800px, (min-width: 768px) 600px, 100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className="flex items-center justify-center mt-4">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
}

