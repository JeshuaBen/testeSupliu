import styled from 'styled-components';

export const Button = styled.button `
  width: 20%;

  padding: 1rem;
  border-radius: 25px;

  background-color: ${({ theme }) => theme.colors.backgroundButtonColor};

  border: 0;

  transition: scale 0.4s;

    :hover {
      transform: scale(1.1);
  } 
  `;

export const Text = styled.span `
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.whiteTextColor};
`;