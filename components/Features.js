"use client";

import styled from "styled-components";
import {fontSizesHeading, fontSizesBody } from "../app/Constants";
import Image from "next/image";

import PatternDivide from "../public/images/patterns/pattern-divide.svg";
import PatterCurveLeft from "../public/images/patterns/pattern-curve-top-left.svg";
import PatterCurveRight from "../public/images/patterns/pattern-curve-top-right.svg";

import EnjoyablePlaceDesktop from "../public/images/homepage/enjoyable-place-desktop.jpg";
import EnjoyablePlaceMobile from "../public/images/homepage/enjoyable-place-mobile.jpg";
import LocallySourcedDesktop from "../public/images/homepage/locally-sourced-desktop.jpg";
import LocallySourcedMobile from "../public/images/homepage/locally-sourced-mobile.jpg";

const featuresData = [
  {
    desktopImg: EnjoyablePlaceDesktop,
    mobileImg: EnjoyablePlaceMobile,
    alt: "Enjoyable Place",
    title: "Enjoyable place for all the family",
    description: "Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal."
  },
  {
    desktopImg: LocallySourcedDesktop,
    mobileImg: LocallySourcedMobile,
    alt: "Locally Sourced",
    title: "The most locally sourced ingredients",
    description: "All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food."
  }
];

const Features = () => {
  return (
    <FeaturesContainer>
          {featuresData.map((feature, index) => (
        <Feature key={index} feature={feature} index={index} />
      ))}
    </FeaturesContainer>
  );
};

const Feature = ({ feature, index }) => (
  <>
    <ImageContainer>

      <picture>
        <source srcSet={feature.desktopImg.src} media="(min-width: 768px)" />
        <Image
          src={feature.mobileImg}
          alt={feature.alt}
          fill
          objectFit="cover"
        />
      </picture>
    </ImageContainer>
    <FeatureContent>
    <PatternDecorations>
        {index === 0 && <PatterCurveRight className="right" />}
        {index === 1 && <PatterCurveLeft className="left" />}
      </PatternDecorations>
      <PatternDivide />
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </FeatureContent>
  </>
);

const PatternDecorations = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    /* top: 0;
    left: 0; */
    width: 100%;

    svg {
      position: absolute;
      width: auto;
      height: auto;
    }

    .left {
      top: 207px;
      left: 532px;
      transform: translate(-50%, -50%);
    }

    .right {
      top: 0;
      left: -713px;
      transform: translate(50%, -50%);
    }
  }
`;

const FeaturesContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding: 1rem;
  margin-top: -5rem;

  @media (min-width: 768px) {
    gap: 2.25rem;
    padding: 5rem;
    margin-top: -10rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 400px;

  @media (min-width: 768px) {
    height: 360px;
  
  }
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

  @media (min-width: 768px) {
    padding: 50px 70px;
    h3 {
      font-size: ${fontSizesHeading[400]};
    }

    p {
      font-size: ${fontSizesBody[200]};
    }
  }
`;



export default Features;
