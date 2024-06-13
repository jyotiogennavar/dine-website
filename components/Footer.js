'use client';
import styled from 'styled-components';
import { colors, fontSizesBody} from '../app/Constants';
import Logo from '../public/images/logo.svg'

const Footer = () => {
  return (
    <FooterContainer>
     <Logo width={110} height={50}/>
      <FooterContent>
        <p>Marthwaite, Sedbergh</p>
        <p>Cumbria</p>
        <p>+00 44 123 4567</p>
      </FooterContent>
      <FooterContent>
        <p>Open Times</p>
        <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
        <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
      </FooterContent>
    </FooterContainer>
  )
}

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
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: ${fontSizesBody[100]};
  text-transform: uppercase;
  line-height: 1.5;
  p {
    margin-bottom: 10px;
  }
`;

export default Footer;

