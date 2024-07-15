"use client";

import styled from "styled-components";
import { fontSizesHeading, fontSizesBody } from "../app/Constants";
import Image from "next/image";

import PatternDivide from "../public/images/patterns/pattern-divide.svg";
import PatternCurveLeft from "../public/images/patterns/pattern-curve-top-left.svg";
import PatternCurveRight from "../public/images/patterns/pattern-curve-top-right.svg";

import EnjoyablePlaceDesktop from "../public/images/homepage/enjoyable-place-desktop.jpg";
import EnjoyablePlaceMobile from "../public/images/homepage/enjoyable-place-mobile.jpg";
import LocallySourcedDesktop from "../public/images/homepage/locally-sourced-desktop.jpg";
import LocallySourcedMobile from "../public/images/homepage/locally-sourced-mobile.jpg";

const Features = () => {
  return (
    <FeaturesContainer>
      <Wrapper>
        <ImageContainer>
          <picture>
            <source
              srcSet={EnjoyablePlaceDesktop.src}
              media="(min-width: 768px)"
            />
            <Image
              src={EnjoyablePlaceMobile}
              alt={"Enjoyable Place"}
              fill
              objectFit="cover"
            />
          </picture>
          <PatternRight />
        </ImageContainer>

        <FeatureContent>
          <PatternDivide />
          <h3>Enjoyable place for all the family</h3>
          <p>
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </p>
        </FeatureContent>
      </Wrapper>
      <Wrapper>
        <FeatureContent>
          <PatternDivide />
          <h3>The most locally sourced ingredients</h3>
          <p>
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </p>
        </FeatureContent>

        <ImageContainer>
          <PatternLeft />
          <picture>
            <source
              srcSet={LocallySourcedDesktop.src}
              media="(min-width: 768px)"
            />
            <Image
              src={LocallySourcedMobile}
              alt={"Locally Sourced"}
              fill
              objectFit="cover"
            />
          </picture>
        </ImageContainer>
      </Wrapper>
    </FeaturesContainer>
  );
};

const Wrapper = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8rem;
  }
`;

const PatternLeft = styled(PatternCurveLeft)`
  @media (min-width: 768px) {
    position: absolute;
    width: 100%;
    top: 420px;
    left: 20px;
    transform: translate(-50%, -50%);
  }
`;

const PatternRight = styled(PatternCurveRight)`
  @media (min-width: 768px) {
    position: absolute;
    width: 100%;
    top: 0;
    left: -713px;
    transform: translate(50%, -50%);
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
    padding: 7rem;
    margin-top: -10rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  height: 400px;

  @media (min-width: 768px) {
    height: 360px;
  }

  @media (min-width: 1024px) {
    /* width: 680px; */
    height: 720px;

    picture {
      width: 540px;
    }
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
    text-align: left;
    width: 40%;
    h3 {
      font-size: ${fontSizesHeading[400]};
    }

    p {
      font-size: ${fontSizesBody[200]};
    }

    svg {
      position: absolute;
      left: 11%;
      transform: translate(-50%, -50%);
    }
  }
`;

export default Features;
