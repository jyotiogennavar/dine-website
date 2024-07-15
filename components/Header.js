"use client";

import styled from "styled-components";
import { colors, fontSizesHeading, fontSizesBody } from "../app/Constants";
import { ButtonLight } from "./Button";

import Image from "next/image";
import Logo from "../public/images/logo.svg";
import HeaderImageDesktop from "../public/images/homepage/hero-bg-desktop.jpg";
import HeaderImageMobile from "../public/images/homepage/hero-bg-mobile.jpg";
import HeaderImageTablet from "../public/images/homepage/hero-bg-tablet.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderImage />

      <HeaderContent>
        <Logo width={110} height={50} />
        <h1>Exquisite dining since 1989</h1>
        <p>
          Experience our seasonal menu in beautiful country surroundings. Eat
          the freshest produce from the comfort of our farmhouse.
        </p>
        <ButtonLight>Book a table</ButtonLight>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderImage = () => (
  <picture>
    <source srcSet={HeaderImageDesktop.src} media="(min-width: 1024px)" />
    <source srcSet={HeaderImageTablet.src} media="(min-width: 768px)" />
    <Image src={HeaderImageMobile} alt="Header Image" fill objectFit="cover" />
  </picture>
);

const HeaderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 720px;
  background: ${colors.primaryDark};

  @media (min-width: 768px) {
    height: 948px;
  }

  @media (min-width: 1024px) {
    height: 820px;
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${colors.white};
  padding: 2rem;
  gap: 1rem;

  h1 {
    font-size: ${fontSizesHeading[300]};
    margin-bottom: 20px;
    font-weight: 200;
    max-width: 15rem;
  }

  p {
    font-size: ${fontSizesBody[100]};
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    padding: 0;
    top: 60%;
    left: 20%;
    transform: translate(-12%, -50%);

    h1 {
      font-size: ${fontSizesHeading[400]};
      max-width: 20rem;
    }

    p {
      font-size: ${fontSizesBody[200]};
    }
  }

  @media (min-width: 1024px) {
    top: 40%;
    left: 25%;
    transform: translate(-50%, -50%);
    text-align: left;
    align-items: flex-start;

    gap: 1rem;

    svg {
      margin-bottom: 10rem;
    }

    h1 {
      font-size: ${fontSizesHeading[500]};
      line-height: 1.1;
      margin-bottom: 0;
      max-width: 25rem;
    }

    p {
      font-size: ${fontSizesBody[200]};
      max-width: 25rem;
    }
  }
`;

export default Header;
