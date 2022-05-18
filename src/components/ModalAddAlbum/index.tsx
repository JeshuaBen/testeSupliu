import React, { ChangeEvent, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import api from "../../services/api";

interface ModalAddAlbumProps {
  isOpen: boolean;
  onClose: () => void;
  handleForceUpdate: () => void;
}

interface FormProps {
  name: string;
  year: string;
}

export function ModalAddAlbum({
  isOpen,
  onClose,
  handleForceUpdate,
}: ModalAddAlbumProps) {
  const [form, setForm] = useState<FormProps>({} as FormProps);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const addNewAlbum = () => {
    api
      .post("/album", form)
      .then((res) => {
        console.log(res.data);
        onClose();
        handleForceUpdate();
      })
      .catch((error) => console.log("Este é o seu erro: ", error));
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crie seu álbum</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome do álbum</FormLabel>
              <Input
                name="name"
                placeholder="Ex: Trem das Onze"
                onChange={handleInputChange}
                required
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Ano do álbum</FormLabel>
              <Input
                name="year"
                placeholder="Ex: 1950"
                onChange={handleInputChange}
                required
                maxLength={4}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addNewAlbum}>
              Criar álbum
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
