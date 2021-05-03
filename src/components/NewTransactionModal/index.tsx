import Modal from "react-modal";

import { Container } from "./styles";

interface NewTransactionModalProps {
 isOpen: boolean;
 onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
 return (
  <Modal
   isOpen={isOpen}
   onRequestClose={onRequestClose}
   overlayClassName="react-modal-overlay"
   className="react-modal-content"
  >

   <Container>
   <h2>Nova Mensagem!</h2>

    <input placeholder="Nome" />
    <textarea placeholder="Digite sua mensagem aqui!" />
    <button type="submit">Enviar</button>
   </Container>

  </Modal>
 )
}