"use client";

import styled from "styled-components";
import { colors, fontSizesHeading, fontSizesBody } from "../app/Constants";
import { ButtonLight } from "./Button";

import Logo from "../public/images/logo.svg";
import Image from "next/image";
import HeaderImageDesktop from "../public/images/homepage/hero-bg-desktop.jpg";
import HeaderImageMobile from "../public/images/homepage/hero-bg-mobile.jpg";
import HeaderImageTablet from "../public/images/homepage/hero-bg-tablet.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <picture>
        <source srcSet={HeaderImageDesktop.src} media="(min-width: 1024px)" />
        <source srcSet={HeaderImageTablet.src} media="(min-width: 768px)" />
        <Image
          src={HeaderImageMobile}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
        />
      </picture>
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

const HeaderContainer = styled.section`
  width: 100%;
  background: ${colors.primaryDark};
  height: 720px;

  @media (min-width: 768px) {
    height: 500px;
  }

  @media (min-width: 1024px) {
    height: 500px;
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-12%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  padding-top: 10rem;
  text-align: center;
  color: ${colors.white};

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
`;

export default Header;
