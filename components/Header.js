'use client'

import Image from 'next/image'
import styled from "styled-components";
import { colors, fontSizesHeading, fontSizesBody } from "../app/Constants";
import { Button } from "./Button";

import Logo from "../public/images/logo.svg";
import HeaderImageDesktop from "../public/images/homepage/hero-bg-desktop.jpg";
import HeaderImageMobile from "../public/images/homepage/hero-bg-mobile.jpg";
import HeaderImageTablet from "../public/images/homepage/hero-bg-tablet.jpg";

const Header = () => {
  return (
    <HeaderContainer>
      <Picture>
        <source srcSet={HeaderImageDesktop.src} media="(min-width: 1024px)" />
        <source srcSet={HeaderImageTablet.src} media="(min-width: 768px)" />
        <Image
          src={HeaderImageMobile}
          alt="Header Image"
          layout="fill"
          objectFit="cover"
        />
      </Picture>
      <HeaderContent>
      <Logo width={90} height={30}/>
        <h1>Exquisite dining since 1989</h1>
        <p>Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.</p>
        <Button>Book a table</Button>
      </HeaderContent>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.section`
  position: relative;
  width: 100%;
  height: 748px; /* Adjust the height as needed */

  @media (min-width: 768px) {
    height: 500px; /* Adjust the height as needed for medium screens */
  }

  @media (min-width: 1024px) {
    height: 500px; /* Adjust the height as needed for large screens */
  }
`;

const Picture = styled.picture`
  position: relative;
  width: 100%;
  height: 100%;
`;

const HeaderContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${colors.white};
  
  h1 {
    font-size: ${fontSizesHeading[300]};
    margin-bottom: 20px;
    font-weight: 400;
  }

  p {
    font-size: ${fontSizesBody[100]};
    margin-bottom: 20px;
  }
`;

export default Header;