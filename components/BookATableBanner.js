'use client';
import styled from "styled-components";
import { colors, fontSizesHeading } from "../app/Constants";
import { ButtonLight } from "./Button";

import Image from "next/image";
import BannerImageDesktop from "../public/images/booking/hero-bg-desktop.jpg";
import BannerImageMobile from "../public/images/booking/hero-bg-mobile.jpg";
import BannerImageTablet from "../public/images/booking/hero-bg-tablet.jpg";

const ReservationBanner = () => {
  return (
    <BannerContainer>
      <picture>
        <source srcSet={BannerImageDesktop.src} media="(min-width: 1024px)" />
        <source srcSet={BannerImageTablet.src} media="(min-width: 768px)" />
        <Image
          src={BannerImageMobile}
          alt="Reservation Banner"
          layout="fill"
          objectFit="cover"
        />
      </picture>
      <BannerContent>
        <h2>Ready to make a reservation?</h2>
        <ButtonLight>Book a table</ButtonLight>
      </BannerContent>
    </BannerContainer>
  );
};

const BannerContainer = styled.section`
margin-top: 5rem;
  position: relative;
  width: 100%;
  /* background-size: cover;
  background-position: center;
  background-image: url('/images/booking/hero-bg-tablet.jpg'); */

  height: 400px; /* Adjust the height as needed */

  @media (min-width: 768px) {
    height: 300px; /* Adjust the height as needed for medium screens */
    /* background-image: url('/images/booking/hero-bg-tablet.jpg'); */
  }

  @media (min-width: 1024px) {
    height: 200px; /* Adjust the height as needed for large screens */
    /* background-image: url('/images/booking/hero-bg-desktop.jpg'); */
  }
`;

const BannerContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${colors.white};

  h2 {
    font-size: ${fontSizesHeading[300]};
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    left: 25%;
    transform: translate(-20%, -50%);
    color: ${colors.white};

    display: flex;
    align-items: start;
    gap: 16rem;

    h2 {
      font-size: ${fontSizesHeading[400]};
      margin-bottom: 20px;
    }
  }
`;

export default ReservationBanner;
