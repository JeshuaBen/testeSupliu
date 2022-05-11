import styled from 'styled-components';

export const Container = styled.input `
  width: 70%;

  padding: 1rem;
  margin-right: 1.5rem;
  
  background-color: ${({ theme }) => theme.colors.whiteBackground};
  outline: 0;
  border: 0;
  border-radius: 25px;

`;