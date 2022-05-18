import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Button,
  Input,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import api from "../../services/api";

interface ModalAddTrackProps {
  isOpen: boolean;
  onClose: () => void;
  albumId?: number;
  trackNumber?: number;
  handleForceUpdate: () => void;
}

interface FormProps {
  title: string;
  duration: number;
}

export function ModalAddTrack({
  isOpen,
  onClose,
  albumId,
  trackNumber,
  handleForceUpdate,
}: ModalAddTrackProps) {
  const [form, setForm] = useState<FormProps>({
    title: "",
    duration: 0,
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm({ ...form, [name]: value });
  };

  const addNewTrack = () => {
    api
      .post("/track", {
        ...form,
        album_id: albumId,
        number: trackNumber,
      })
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
          <ModalHeader>Inclua uma faixa</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome da faixa</FormLabel>
              <Input
                name="title"
                placeholder="Ex: Quem ama não esquece"
                maxLength={100}
                required
                onChange={handleInputChange}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Duração da faixa</FormLabel>
              <Input
                name="duration"
                placeholder="Ex: 190"
                minLength={3}
                required
                type="number"
                onChange={handleInputChange}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={addNewTrack}>
              Criar faixa
            </Button>
            <Button onClick={onClose}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
