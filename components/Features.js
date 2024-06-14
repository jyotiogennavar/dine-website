"use client";

import styled from "styled-components";
import { colors, fontSizesHeading, fontSizesBody } from "../app/Constants";

import Image from "next/image";

import PatternDivide from "../public/images/patterns/pattern-divide.svg";

import EnjoyablePlaceDesktop from "../public/images/homepage/enjoyable-place-desktop.jpg";
import EnjoyablePlaceMobile from "../public/images/homepage/enjoyable-place-mobile.jpg";
import LocallySourcedDesktop from "../public/images/homepage/locally-sourced-desktop.jpg";
import LocallySourcedMobile from "../public/images/homepage/locally-sourced-mobile.jpg";

const Features = () => {
  return (
    <FeaturesContainer>
      <ImageContainer>
        <picture>
          <source
            srcSet={EnjoyablePlaceDesktop.src}
            media="(min-width: 768px)"
          />
          <Image
            src={EnjoyablePlaceMobile}
            alt="Enjoyable Place"
            layout="fill"
            objectFit="cover"
          />
        </picture>
      </ImageContainer>
      <FeatureContent>
        <PatternDivide />
        <h3>Enjoyable place for all the family</h3>
        <p>
          Our relaxed surroundings make dining with us a great experience for
          everyone. We can even arrange a tour of the farm before your meal.
        </p>
      </FeatureContent>

      <ImageContainer>
        <picture>
          <source
            srcSet={LocallySourcedDesktop.src}
            media="(min-width: 768px)"
          />
          <Image
            src={LocallySourcedMobile}
            alt="Locally Sourced"
            layout="fill"
            objectFit="cover"
          />
        </picture>
      </ImageContainer>
      <FeatureContent>
        <PatternDivide />
        <h3>The most locally sourced ingredients</h3>
        <p>
          All our ingredients come directly from our farm or local fishery. So
          you can be sure that you’re eating the freshest, most sustainable
          food.
        </p>
      </FeatureContent>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding: 1rem;

  margin-top: -5rem;


`;

const ImageContainer = styled.div`
  position: relative;
  height: 400px;
`;

const FeatureContent = styled.div`
  padding: 20px;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;

  svg {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  h3 {
    margin-top: 2rem;
    font-size: ${fontSizesHeading[200]};
    margin-bottom: 10px;
  }

  p {
    font-size: ${fontSizesBody[100]};
  }
`;

export default Features;