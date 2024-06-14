'use client';

import styled from 'styled-components';
import { colors, fontSizesBody } from '../app/Constants';
import Logo from '../public/images/logo.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <Logo width={110} height={50} />
      <FooterContent>
        <Address />
        <OpenTimes />
      </FooterContent>
    </FooterContainer>
  );
};

const Address = () => (
  <FooterSection>
    <p>Marthwaite, Sedbergh</p>
    <p>Cumbria</p>
    <p>+00 44 123 4567</p>
  </FooterSection>
);

const OpenTimes = () => (
  <FooterSection>
    <p>Open Times</p>
    <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
    <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
  </FooterSection>
);

const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: ${colors.primaryDark};
  color: ${colors.white};
  padding: 20px 100px;
  gap: 20px;
  justify-items: flex-start;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
    justify-items: center;
    text-align: center;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const FooterSection = styled.div`
  font-size: ${fontSizesBody[100]};
  text-transform: uppercase;
  line-height: 1.5;

  p {
    margin-bottom: 10px;
  }
`;

export default Footer;
