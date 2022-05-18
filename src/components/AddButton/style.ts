import styled from "styled-components";
import { MdAdd } from "react-icons/md";

export const Button = styled.button`
  width: 15%;
  padding: 1rem;
  border-radius: 25px;

  background-color: ${({ theme }) => theme.colors.backgroundButtonColor};

  border: 0;

  transition: 0.4s filter;

  :hover {
    filter: brightness(0.8);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Text = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1rem;

  color: ${({ theme }) => theme.colors.whiteTextColor};
`;

export const Icon = styled(MdAdd)`
  color: ${({ theme }) => theme.colors.whiteTextColor};

  font-size: 1.3rem;
`;
