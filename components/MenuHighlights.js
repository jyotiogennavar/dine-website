"use client";

import styled from "styled-components";
import { colors, fontSizesHeading, fontSizesBody } from "../app/Constants";
import Image from "next/image";
import PatternDivide from "../public/images/patterns/pattern-divide.svg";

import BeefDesktop from "../public/images/homepage/beef-desktop-tablet.jpg";
import BeefMobile from "../public/images/homepage/beef-mobile.jpg";
import ChocolateDesktop from "../public/images/homepage/chocolate-desktop-tablet.jpg";
import ChocolateMobile from "../public/images/homepage/chocolate-mobile.jpg";
import SalmonDesktop from "../public/images/homepage/salmon-desktop-tablet.jpg";
import SalmonMobile from "../public/images/homepage/salmon-mobile.jpg";

const menuItems = [
  {
    desktopImg: BeefDesktop,
    mobileImg: BeefMobile,
    alt: "Beef dish",
    title: "Seared Beef Fillet",
    description: "Our locally sourced beef cooked to perfection and served with a selection of seasonal vegetables."
  },
  {
    desktopImg: ChocolateDesktop,
    mobileImg: ChocolateMobile,
    alt: "Chocolate dessert",
    title: "Chocolate Soufflé",
    description: "Dark chocolate soufflé with a hint of orange. Served with a side of fresh cream."
  },
  {
    desktopImg: SalmonDesktop,
    mobileImg: SalmonMobile,
    alt: "Salmon dish",
    title: "Summer Salmon Fillet",
    description: "Roasted salmon fillet with a delicate garlic butter and served with fresh green beans."
  },
];

const MenuHighlights = () => {
  return (
    <MenuHighlightsContainer>
      <Heading>
        <PatternDivide />
        <h2>A few highlights from our menu</h2>
        <p>
          We cater for all dietary requirements, but here’s a glimpse at some of
          our diner’s favorites. Our menu is revamped every season.
        </p>
      </Heading>
      {menuItems.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </MenuHighlightsContainer>
  );
};

const MenuItem = ({ item }) => (
  <Container>
    <MenuHighlight>
      <picture>
        <source srcSet={item.desktopImg.src} media="(min-width: 768px)" />
        <Image
          src={item.mobileImg}
          alt={item.alt}
          fill
          objectFit="cover"
        />
      </picture>
    </MenuHighlight>
    <HighlightContent>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </HighlightContent>
  </Container>
);

const MenuHighlightsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding: 1rem;
  margin: 0 auto;
  background-color: ${colors.primaryDark};
  color: ${colors.white};

  @media (min-width: 768px) {
    
  }



  @media (min-width: 1024px) {
     grid-template-columns: repeat(3, 1fr);
  }
`;

const Heading = styled.div`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 2rem;
  position: relative;

  svg {
    position: absolute;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
  }

  h2 {
    padding-top: 2rem;
    font-size: 1.75rem;
    margin-bottom: 10px;
    line-height: 1.1;
  }

  @media (min-width: 768px) { 
     max-width: 70%;
      margin: 0 auto;
    h2  {
      font-size: ${fontSizesHeading[400]};
    }

    p {
    
    }
    
  }
`;

const Container = styled.div`
  /* position: relative; */
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

const MenuHighlight = styled.div`
  position: relative;
  height: 245px;
  @media (min-width: 768px) {
    height: 96px;
  }
`;

const HighlightContent = styled.div`
  padding: 20px;
  text-align: center;
  margin-bottom: 1rem;
  border-bottom: 1px solid ${colors.secondaryMid};

  h3 {
    font-size: ${fontSizesHeading[200]};
    margin-bottom: 10px;
  }

  p {
    font-size: ${fontSizesBody[100]};
  }

  @media (min-width: 768px) {
    text-align: left;
    border: none;
  }
`;

export default MenuHighlights;
