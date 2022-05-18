import { formateMinute } from "../../utils/masks";
import { ButtonHTMLAttributes, useState } from "react";
import { Tooltip, useDisclosure } from "@chakra-ui/react";

import {
  Container,
  Content,
  TitleContainer,
  Title,
  Year,
  Button,
  IconWrapper,
  TrashIcon,
  AddIcon,
  InfoContainer,
  TrackContainer,
  TextContainer,
  Number,
  Track,
  DurationContainer,
  Duration,
  TrackInfoContainer,
  TrackNumberContainer,
  TrackNumber,
  TrackName,
  DurationContainer2,
  TrackDuration,
  TrashButton,
} from "./style";

import { ModalRemove } from "../ModalRemove";
import { ModalAddTrack } from "../ModalAddTrack";

interface AlbunsProps {
  id: number;
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

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  data: AlbunsProps[];
  handleForceUpdate: () => void;
}

export function Albuns({ data, handleForceUpdate, ...rest }: Props) {
  const [selectedAlbum, setSelectedAlbum] = useState<AlbunsProps | null>(null);
  const [id, setId] = useState<number>(0);
  const [text, setText] = useState("");

  const {
    isOpen: isAddTrackOpen,
    onOpen: onAddTrackOpen,
    onClose: onAddTrackClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const handleOpen = (album: AlbunsProps) => {
    if (album) {
      setSelectedAlbum(album);
      onAddTrackOpen();
    }
  };

  const handleDeleteOpen = (text: string, id: number) => {
    if (text !== "") {
      setId(id);
      setText(text);
      onDeleteOpen();
    }
  };

  return (
    <Container>
      {data?.map((info) => (
        <Content key={info.id}>
          <TitleContainer>
            <Title>Álbum: {info.name},</Title>
            <Year>{info.year}</Year>
            <Button
              {...rest}
              onClick={() => handleDeleteOpen("Excluir álbum", info.id)}
            >
              <Tooltip
                label="Excluir álbum"
                fontSize="sm"
                placement="top"
                hasArrow
              >
                <IconWrapper>
                  <TrashIcon />
                </IconWrapper>
              </Tooltip>
            </Button>
            <Button {...rest} onClick={() => handleOpen(info)}>
              <Tooltip
                label="Adicionar faixa"
                fontSize="sm"
                placement="top"
                hasArrow
              >
                <IconWrapper>
                  <AddIcon />
                </IconWrapper>
              </Tooltip>
            </Button>
          </TitleContainer>
          <InfoContainer>
            <TrackContainer>
              <TextContainer>
                <Number>Nº</Number>
              </TextContainer>
              <Track>Faixa</Track>
            </TrackContainer>
            <DurationContainer>
              <Duration>Duração</Duration>
            </DurationContainer>
          </InfoContainer>

          {info?.tracks.map((track) => (
            <TrackInfoContainer key={track.id}>
              <TrackNumberContainer>
                <TextContainer>
                  <TrackNumber>{track.number}</TrackNumber>
                </TextContainer>
                <TrackName>{track.title}</TrackName>
              </TrackNumberContainer>
              <DurationContainer2>
                <TrackDuration>{formateMinute(track.duration)}</TrackDuration>
                <TrashButton
                  {...rest}
                  onClick={() => handleDeleteOpen("Excluir faixa", track.id)}
                >
                  <Tooltip
                    label="Excluir faixa"
                    fontSize="sm"
                    placement="top"
                    hasArrow
                  >
                    <IconWrapper>
                      <TrashIcon />
                    </IconWrapper>
                  </Tooltip>
                </TrashButton>
              </DurationContainer2>
            </TrackInfoContainer>
          ))}
        </Content>
      ))}
      <ModalRemove
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        modalTitle={text}
        id={id}
        handleForceUpdate={handleForceUpdate}
      />
      <ModalAddTrack
        isOpen={isAddTrackOpen}
        onClose={onAddTrackClose}
        albumId={selectedAlbum ? selectedAlbum?.id : -1}
        trackNumber={selectedAlbum ? selectedAlbum?.tracks?.length + 1 : -1}
        handleForceUpdate={handleForceUpdate}
      />

      <ModalRemove
        isOpen={isDeleteOpen}
        onClose={onDeleteClose}
        modalTitle={text}
        id={id}
        handleForceUpdate={handleForceUpdate}
      />
    </Container>
  );
}
