import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import {
  Container,
  Header,
  Logo,
  Title,
  Content,
  TextLabel,
  FilterContainer 
} from './style';

import LogoImg from '../../assets/logo.png';
import { Input } from '../../components/Input';
import { SearchButton } from '../../components/SearchButton';

export function Main() {
  const [loading, setLoading] = useState(false);

  useEffect( () => {
    setLoading(true)
    api.get('/album')
    .then(res => {
      console.log(res)
    } )
    .catch(error => console.error(error))
    .finally( () => setLoading(false))
  }, [])

  return (
    <Container>

      <Header>
        <Logo src={LogoImg}></Logo>
        <Title>Discografia</Title>
      </Header>

      <Content>
        <TextLabel>
          Digite uma palavra chave
        </TextLabel>
        <FilterContainer>
          <Input />
          <SearchButton />
        </FilterContainer>
      </Content>

    </Container>
  )
}