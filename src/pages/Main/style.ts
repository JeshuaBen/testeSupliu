import styled from 'styled-components';

import BackgroundImg from '../../assets/background.png';

export const Container = styled.div `
  width: 100%;
  height: 100vh;

  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div `
  width: 70%;
  height: 15%;
  max-height: 5rem;

  margin-top: 1.6rem;
  padding: 1.2rem;
  background-color: ${({ theme }) => theme.colors.whiteBackground};

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 6px 6px 11px -6px rgba(0,0,0,0.74); 
  -webkit-box-shadow: 6px 6px 11px -6px rgba(0,0,0,0.74); 
`;

export const Logo = styled.img `
  
`;
export const Title = styled.span `
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 3rem;

`;

export const Content = styled.div `
  width: 70%;
  height: 70%;

  background:rgba(255,255,255, 0.3);  
  

  padding: 1.4rem 1.2rem;
`;

export const TextLabel = styled.span `
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.textColor};
  opacity: 0.6;

`;

export const FilterContainer = styled.div `
  width: 100%;
  margin-top: 0.5rem;
`;
