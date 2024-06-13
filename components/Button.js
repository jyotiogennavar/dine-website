'use client'
import styled from 'styled-components';
import { colors, fontSizesBody} from '../app/Constants';


export const Button = styled.button`
  background-color: transparent;
  color: ${colors.primaryDark};
  font-weight: bold;
  font-size: ${fontSizesBody[100]};
  letter-spacing: 2.5px;
  text-transform: uppercase;
  padding: 15px 40px;
  border: 2px solid ${colors.primaryDark};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.primaryDark};
    color: ${colors.white};
  }

  &:focus {
    outline: none;
  }
  
  `;

export const ButtonLight = styled(Button)`
  color: ${colors.white};
  border: 2px solid ${colors.white};

  &:hover {
    background-color:${colors.white};
    color: ${colors.primaryDark};
  }
`;


