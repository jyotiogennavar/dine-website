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
      <ResponsiveImage />
      <BannerContent>
        <h2>Ready to make a reservation?</h2>
        <ButtonLight>Book a table</ButtonLight>
      </BannerContent>
    </BannerContainer>
  );
};

const ResponsiveImage = () => (
  <Picture>
    <source srcSet={BannerImageDesktop.src} media="(min-width: 1024px)" />
    <source srcSet={BannerImageTablet.src} media="(min-width: 768px)" />
    <Image
      src={BannerImageMobile}
      alt="Reservation Banner"
      fill
      objectFit="cover"
    />
  </Picture>
);

const BannerContainer = styled.section`
  position: relative;
  width: 100%;
  height: 400px;
  margin-top: 5rem;

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 200px;
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
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h2 {
      font-size: ${fontSizesHeading[400]};
    }
  }
`;

const Picture = styled.picture`
  position: relative;
`;
export default ReservationBanner;
