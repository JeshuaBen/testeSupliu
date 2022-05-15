import { ChangeEvent } from "react";
import { Container, IconContainer, Icon } from "./style";

interface InputProps {
  searchText: string;
  setSearchText: any;
}

export function Input({ searchText, setSearchText }: InputProps) {
  return (
    <Container>
      <IconContainer
        type="text"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <Icon />
    </Container>
  );
}
