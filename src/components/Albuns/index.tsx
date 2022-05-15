import {
  Container,
  Content,
  TitleContainer,
  Title,
  Year,
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
} from "./style";

import { formateMinute } from "../../utils/masks";

interface AlbunsProps {
  id: string;
  name: string;
  tracks: [
    {
      id: number;
      number: number;
      title: string;
      duration: number;
    }
  ];
  year: number;
}

interface Props {
  data: AlbunsProps[];
}

export function Albuns({ data }: Props) {
  return (
    <Container>
      {data?.map((info) => (
        <Content>
          <TitleContainer>
            <Title>Álbum: {info.name},</Title>
            <Year>{info.year}</Year>
          </TitleContainer>
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

          {info?.tracks.map((track) => (
            <TrackInfoContainer>
              <TrackNumberContainer>
                <NumberContainer>
                  <TrackNumber>{track.id}</TrackNumber>
                </NumberContainer>
                <TrackName>{track.title}</TrackName>
              </TrackNumberContainer>
              <DurationContainer>
                <TrackDuration>{formateMinute(track.duration)}</TrackDuration>
              </DurationContainer>
            </TrackInfoContainer>
          ))}
        </Content>
      ))}
    </Container>
  );
}
