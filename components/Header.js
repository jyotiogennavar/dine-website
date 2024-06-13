
'use client';

import styled from "styled-components";
import { colors, fontSizesHeading, fontSizesBody } from "../app/Constants";
import { Button, ButtonLight } from "./Button";

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
      <Logo width={110} height={50}/>
        <h1>Exquisite dining since 1989</h1>
        <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
        <ButtonLight>Book a table</ButtonLight>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  width: 100%; 
  height: 748px; /* Adjust the height as needed */
  /* background-size: cover;
  background-position: center;
 
  background-image: url('/images/homepage/hero-bg-tablet.jpg'); */

  @media (min-width: 768px) {
    height: 500px; /* Adjust the height as needed for medium screens */
    /* background-image: url('/images/homepage/hero-bg-tablet.jpg'); */
  }

  @media (min-width: 1024px) {
    height: 500px; /* Adjust the height as needed for large screens */
    /* background-image: url('/images/homepage/hero-bg-desktop.jpg'); */
  }
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);


  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  align-items: center;

 padding-top: 16rem;
 margin: 0 3rem ;

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