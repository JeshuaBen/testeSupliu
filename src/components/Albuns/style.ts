import styled from "styled-components";
import { MdRestoreFromTrash, MdAdd } from "react-icons/md";

export const Container = styled.div`
  width: 100%;

  margin-top: 1.4rem;
`;

export const Content = styled.div`
  margin-bottom: 1.2rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const Year = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 700;

  margin-left: 0.4rem;
`;

export const Button = styled.button`
  display: flex;
  border: 0;
  border-radius: 35px;

  background-color: ${({ theme }) => theme.colors.white};

  margin-left: 0.4rem;
  margin-right: 0.4rem;
  outline: 0;

  :hover {
    filter: brightness(0.8);
  }
`;

export const IconWrapper = styled.span``;

export const TrashIcon = styled(MdRestoreFromTrash)`
  background-color: ${({ theme }) => theme.colors.white};

  border-radius: 35px;
`;

export const AddIcon = styled(MdAdd)``;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;

  padding: 0.3rem;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const TrackContainer = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  padding-right: 0.4rem;
`;

export const TextContainer = styled.div`
  width: 14%;
  margin-right: 0.9rem;
`;

export const Number = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;
export const Track = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;
export const DurationContainer = styled.div``;
export const Duration = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;
export const TrackInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.3rem;

  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
export const TrackNumberContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;

  padding-right: 0.4rem;
`;
export const TrackNumber = styled.span`
  font-family: "Roboto", sans-serif;
`;
export const TrackName = styled.span`
  font-family: "Roboto", sans-serif;
`;

export const DurationContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 6%;
`;

export const TrackDuration = styled.span`
  font-family: "Roboto", sans-serif;
`;

export const TrashButton = styled.button``;
