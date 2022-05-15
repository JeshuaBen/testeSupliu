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

interface AlbumProps {
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

export function Main() {
  const [loading, setLoading] = useState<boolean>(false);
  const [albunsData, setAlbunsData] = useState<AlbumProps[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setLoading(true);
    api
      .get("/album")
      .then((res) => {
        setAlbunsData(res.data.data);
      })
      .catch((error) => console.error(`Ops, aconteceu o erro. ${error}`))
      .finally(() => setLoading(false));
  }, []);

  const filteredAlbuns: AlbumProps[] = albunsData.filter(
    (album: AlbumProps) => {
      return album.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;
    }
  );

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
          <AddButton />
        </FilterContainer>
        <Albuns data={searchText !== "" ? filteredAlbuns : albunsData} />
      </Content>
    </Container>
  );
}
