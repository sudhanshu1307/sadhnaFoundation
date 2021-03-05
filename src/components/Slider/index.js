import React from "react";
import { Button } from "../Button";
import {
  SliderSection,
  SliderWrapper,
  Slide,
  SlideImage,
  SliderItems,
  SlideContent,
} from "./SliderElements";

function Slider({ slides }) {
  return (
    <>
      <SliderSection>
        <SliderWrapper>
          {slides.map((slide, index) => {
            return (
              <Slide key={index}>
                <SliderItems>
                  <SlideImage>
                    <SlideContent>
                      <h1>{slide.heading}</h1>
                      <p>{slide.title}</p>
                      <Button to={slide.path} primary="true">
                        {slide.label}
                      </Button>
                    </SlideContent>
                  </SlideImage>
                </SliderItems>
              </Slide>
            );
          })}
        </SliderWrapper>
      </SliderSection>
    </>
  );
}

export default Slider;
