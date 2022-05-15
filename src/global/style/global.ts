import { createGlobalStyle } from "styled-components";

export default createGlobalStyle` 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  top: 0px;
  left: 0px;
  overflow-x: hidden;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.white} !important;
  background-position: bottom !important;
  background-repeat: no-repeat;
  background-attachment: fixed !important;
  opacity: 1;
}
`;
