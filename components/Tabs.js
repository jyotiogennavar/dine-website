"use client";
import React, { useState } from "react";

import styled from "styled-components";
import { colors, fontSizesHeading, fontSizesBody } from "../app/Constants";
import { Button } from "./Button";

import Image from "next/image";

import FamilyGatheringDesktop from "../public/images/homepage/family-gathering-desktop.jpg";
import FamilyGatheringTablet from "../public/images/homepage/family-gathering-tablet.jpg";
import FamilyGatheringMobile from "../public/images/homepage/family-gathering-mobile.jpg";

import SpecialEventsDesktop from "../public/images/homepage/special-events-desktop.jpg";
import SpecialEventsTablet from "../public/images/homepage/special-events-tablet.jpg";
import SpecialEventsMobile from "../public/images/homepage/special-events-mobile.jpg";

import SocialEventsDesktop from "../public/images/homepage/social-events-desktop.jpg";
import SocialEventsTablet from "../public/images/homepage/social-events-tablet.jpg";
import SocialEventsMobile from "../public/images/homepage/social-events-mobile.jpg";

const tabData = [
  {
    title: "Family Gathering",
    content:
      "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    desktopImg: FamilyGatheringDesktop,
    tabletImg: FamilyGatheringTablet,
    mobileImg: FamilyGatheringMobile,
  },
  {
    title: "Social Events",
    content:
      "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    desktopImg: SocialEventsDesktop,
    tabletImg: SocialEventsTablet,
    mobileImg: SocialEventsMobile,
  },
  {
    title: "Special Events",
    content:
      "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    desktopImg: SpecialEventsDesktop,
    tabletImg: SpecialEventsTablet,
    mobileImg: SpecialEventsMobile,
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <TabsContainer>
      <TabsImage
        desktopImg={tabData[activeTab].desktopImg}
        tabletImg={tabData[activeTab].tabletImg}
        mobileImg={tabData[activeTab].mobileImg}
        alt={tabData[activeTab].title}
      />
      <TabLinks>
        {tabData.map((tab, index) => (
          <p
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? "active" : ""}
          >
            {tab.title}
          </p>
        ))}
      </TabLinks>
      <TabsContent
        title={tabData[activeTab].title}
        content={tabData[activeTab].content}
      />
      <Button>Book a table</Button>
    </TabsContainer>
  );
};

const TabsImage = ({ desktopImg, tabletImg, mobileImg, alt }) => (
  <StyledTabsImage>
    <picture>
      <source srcSet={desktopImg.src} media="(min-width: 1024px)" />
      <source srcSet={tabletImg.src} media="(min-width: 768px)" />
      <Image src={mobileImg} alt={alt} fill objectFit="cover" />
    </picture>
  </StyledTabsImage>
);

const TabsContent = ({ title, content }) => (
  <StyledTabsContent>
    <h2>{title}</h2>
    <p>{content}</p>
  </StyledTabsContent>
);

const TabsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  padding: 1rem;
`;

const TabLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 1rem;

  p {
    font-size: ${fontSizesBody[200]};
    font-weight: 600;
    color: #8d8d8d;
    letter-spacing: 1px;
    cursor: pointer;
    position: relative; /* Ensure this is set */

    &.active {
      color: ${colors.secondaryDark};
      border-bottom: 2px solid ${colors.primaryLight};
    }
  }
`;

const StyledTabsContent = styled.div`
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
`;

const StyledTabsImage = styled.div`
  position: relative;
  height: 400px;
`;

export default Tabs;
