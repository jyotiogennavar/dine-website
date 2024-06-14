"use client";

import styled from "styled-components";
import { colors, fontSizesHeading, fontSizesBody } from "../app/Constants";

import Image from "next/image";
import BeefDesktop from "../public/images/homepage/beef-desktop-tablet.jpg";
import BeefMobile from "../public/images/homepage/beef-mobile.jpg";
import ChocolateDesktop from "../public/images/homepage/chocolate-desktop-tablet.jpg";
import ChocolateMobile from "../public/images/homepage/chocolate-mobile.jpg";
import SalmonDesktop from "../public/images/homepage/salmon-desktop-tablet.jpg";
import SalmonMobile from "../public/images/homepage/salmon-mobile.jpg";
import PatternDivide from "../public/images/patterns/pattern-divide.svg";

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
      <MenuHighlight>
        <picture>
          <source srcSet={BeefDesktop.src} media="(min-width: 768px)" />
          <Image
            src={BeefMobile}
            alt="Beef dish"
            layout="fill"
            objectFit="cover"
          />
        </picture>
      </MenuHighlight>
      <HighlightContent>
        <h3>Seared Beef Fillet</h3>
        <p>
          Our locally sourced beef cooked to perfection and served with a
          selection of seasonal vegetables.
        </p>
  
      </HighlightContent>
      <MenuHighlight>
        <picture>
          <source srcSet={ChocolateDesktop.src} media="(min-width: 768px)" />
          <Image
            src={ChocolateMobile}
            alt="Chocolate dessert"
            layout="fill"
            objectFit="cover"
          />
        </picture>
      </MenuHighlight>
      <HighlightContent>
        <h3>Chocolate Soufflé</h3>
        <p>
          Dark chocolate soufflé with a hint of orange. Served with a side of
          fresh cream.
        </p>
      </HighlightContent>
      <MenuHighlight>
        <picture>
          <source srcSet={SalmonDesktop.src} media="(min-width: 768px)" />
          <Image
            src={SalmonMobile}
            alt="Salmon dish"
            layout="fill"
            objectFit="cover"
          />
        </picture>
      </MenuHighlight>
      <HighlightContent>
        <h3>Summer Salmon Fillet</h3>
        <p>
          Roasted salmon fillet with a delicate garlic butter and served with
          fresh green beans.
        </p>
      </HighlightContent>
    </MenuHighlightsContainer>
  );
};

const MenuHighlightsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding: 1rem;
  background-color: ${colors.primaryDark};
  color: ${colors.white};

  @media (min-width: 768px) {
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
`;

const MenuHighlight = styled.div`
  position: relative;
  height: 245px;
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
`;

export default MenuHighlights;
