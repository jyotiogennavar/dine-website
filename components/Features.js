"use client";

import styled from "styled-components";
import { colors, fontSizesHeading, fontSizesBody } from "../app/Constants";
import Image from "next/image";
import PatternDivide from "../public/images/patterns/pattern-divide.svg";

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
        <Feature key={index} feature={feature} />
      ))}
    </FeaturesContainer>
  );
};

const Feature = ({ feature }) => (
  <>
    <ImageContainer>
      <picture>
        <source srcSet={feature.desktopImg.src} media="(min-width: 768px)" />
        <Image
          src={feature.mobileImg}
          alt={feature.alt}
          layout="fill"
          objectFit="cover"
        />
      </picture>
    </ImageContainer>
    <FeatureContent>
      <PatternDivide />
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </FeatureContent>
  </>
);

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
