import { ButtonHTMLAttributes } from "react";
import { Button, Text, Icon, Container } from "./style";

interface AddButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function AddButton({ ...rest }: AddButtonProps) {
  return (
    <Button {...rest}>
      <Container>
        <Text>Adicionar</Text>
        <Icon></Icon>
      </Container>
    </Button>
  );
}
