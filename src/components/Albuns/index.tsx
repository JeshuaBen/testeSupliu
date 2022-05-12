
import {
  Container,
  Title,
  InfoContainer,
  TrackContainer,
  NumberContainer,
  Number,
  Track,
  DurationContainer,
  Duration,
  TrackInfoContainer,
  TrackNumberContainer,
  TrackNumber,
  TrackName,
  TrackDuration,
} from './style';


interface AlbunsProps {
  title: string;
  trackNumber: string;
  trackName: string;
  trackDuration: string;
}

export function Albuns({
  title,
  trackNumber,
  trackName,
  trackDuration
}: AlbunsProps) 
{
  return(
    <Container>
      <Title>Álbum: {title}</Title>
      <InfoContainer>
        <TrackContainer>
          <NumberContainer>
            <Number>Nº</Number>
          </NumberContainer>
          <Track>Faixa</Track>
        </TrackContainer>
        <DurationContainer>
          <Duration>Duração</Duration>
        </DurationContainer>
      </InfoContainer>

      <TrackInfoContainer>
        <TrackNumberContainer>
          <NumberContainer>
            <TrackNumber>{trackNumber}</TrackNumber>
          </NumberContainer>
          <TrackName>{trackName}</TrackName>
        </TrackNumberContainer>
        <DurationContainer>
        <TrackDuration>{trackDuration}</TrackDuration>
        </DurationContainer>
      </TrackInfoContainer>
    </Container>
  )
}