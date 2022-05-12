import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin-top: 1.4rem;
`;
export const Title = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;

`
export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;

  padding: 0.3rem;

  :hover {
    background:rgba(0,0,0, 0.1);
  }
`
export const TrackContainer = styled.div`
  width: 30%;

  display: flex;
  align-items: center;
  
  padding-right: 0.4rem;
`
export const NumberContainer = styled.div `
  margin-right: 2.4rem;
`;

export const Number = styled.span`

  font-family: 'Roboto', sans-serif;
`
export const Track = styled.span`
  font-family: 'Roboto', sans-serif;

`
export const DurationContainer = styled.div`
  margin-right: 0.8rem;
`;
export const Duration = styled.span`
  font-family: 'Roboto', sans-serif;

`
export const TrackInfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
  padding: 0.3rem;


  :hover {
    background:rgba(0,0,0, 0.1);
  }
`
export const TrackNumberContainer = styled.div`
  display: flex;
  align-items: center;

  padding-right: 0.4rem;
`
export const TrackNumber = styled.span`
  font-family: 'Roboto', sans-serif;

`
export const TrackName = styled.span`
  font-family: 'Roboto', sans-serif;
`
export const TrackDuration = styled.span`
  font-family: 'Roboto', sans-serif;
`