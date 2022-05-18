import React, { useEffect, useState } from "react";
import api from "../../services/api";

import {
  Container,
  Header,
  Logo,
  Title,
  Content,
  TextLabel,
  FilterContainer,
} from "./style";

import LogoImg from "../../assets/logo.png";
import { Input } from "../../components/Input";
import { AddButton } from "../../components/AddButton";
import { Albuns } from "../../components/Albuns";
import { useDisclosure } from "@chakra-ui/react";
import { ModalAddAlbum } from "../../components/ModalAddAlbum";

interface AlbumProps {
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

export function Main() {
  const [loading, setLoading] = useState<boolean>(false);
  const [albunsData, setAlbunsData] = useState<AlbumProps[]>([]);
  const [searchText, setSearchText] = useState("");
  const [forceUpdate, setForceUpdate] = useState<boolean>(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setLoading(true);

    api
      .get("/album")
      .then((res) => {
        setAlbunsData(res.data.data);
      })
      .catch((error) => console.error(`Ops, aconteceu o erro. ${error}`))
      .finally(() => setLoading(false));
  }, [forceUpdate]);

  const filteredAlbuns: AlbumProps[] = albunsData.filter(
    (album: AlbumProps) => {
      if (album.name.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }

      let found = false;

      album.tracks.forEach((track) => {
        if (track.title.toLowerCase().includes(searchText.toLowerCase())) {
          return (found = true);
        }
      });

      return found;
    }
  );

  const handleForceUpdate = () => {
    setForceUpdate((previous) => !previous);
  };

  return (
    <Container>
      <Header>
        <Logo src={LogoImg}></Logo>
        <Title>Discografia</Title>
      </Header>

      <Content>
        <TextLabel>Digite uma palavra chave</TextLabel>
        <FilterContainer>
          <Input searchText={searchText} setSearchText={setSearchText} />
          <AddButton onClick={onOpen} />
        </FilterContainer>
        <Albuns
          data={searchText !== "" ? filteredAlbuns : albunsData}
          handleForceUpdate={handleForceUpdate}
        />
      </Content>

      <ModalAddAlbum
        isOpen={isOpen}
        onClose={onClose}
        handleForceUpdate={handleForceUpdate}
      />
    </Container>
  );
}
