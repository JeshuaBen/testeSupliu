import styled from "styled-components";

import { MdSearch } from "react-icons/md";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  margin-right: 1.5rem;

  background-color: ${({ theme }) => theme.colors.whiteBackground};
  outline: 0;
  border: 0;
  border-radius: 25px;

  :hover {
    cursor: pointer;
    border: 1px solid RGBA(0, 86, 61, 0.18);
  }

  position: relative;
`;

export const IconContainer = styled.input`
  width: 95%;
  display: flex;
  align-items: center;
  padding: 1rem;
  border: 0;
  border-radius: 25px;
  outline: 0;
`;

export const Icon = styled(MdSearch)`
  position: absolute;
  right: 1.4rem;

  font-size: 1.4rem;
`;
