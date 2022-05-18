import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import api from "../../services/api";

interface ModalRemoveProps {
  isOpen: boolean;
  onClose: () => void;
  modalTitle: string;
  id: number;
  handleForceUpdate: () => void;
}

export function ModalRemove({
  isOpen,
  onClose,
  modalTitle,
  id,
  handleForceUpdate,
}: ModalRemoveProps) {
  const handleRemove = () => {
    const body = modalTitle === "Excluir álbum" ? "album" : "track";
    api
      .delete(`${body}/${id}`)
      .then((res) => {
        console.log(res.data);
        onClose();
        handleForceUpdate();
      })
      .catch((error) => console.log("Erro:", error));
  };

  return (
    <>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalCloseButton _focus={{ outlineColor: "transparent" }} />
          <ModalBody>Você tem certeza que deseja deletar?</ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleRemove}>
              Deletar
            </Button>
            <Button
              onClick={onClose}
              variant="ghost"
              _focus={{ outlineColor: "transparent" }}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
