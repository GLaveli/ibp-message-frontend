import { FormEvent, useState, useContext } from "react";
import Modal from "react-modal";
import { api } from "../../services/api";
import { MessagesContext } from "../../MessagesContext";

import pray from '../../assets/pray.png';
import like from '../../assets/like.png';

import { Container } from "./styles";


interface NewTransactionModalProps {
 isOpen: boolean;
 onRequestClose: () => void;

}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
 const { createMessage } = useContext(MessagesContext);


 const [changeTitle, setChangeTitle] = useState('Oração');
 const [name, setName] = useState('');
 const [message, setMessage] = useState('');
 const [isCheckedPray, setIsCheckedPray] = useState(true);
 const [isCheckedLike, setIsCheckedLike] = useState(false);

 let messageType = 1;

 function handleSelectors() {
  if (isCheckedPray === false) {
   setIsCheckedPray(true);
   setIsCheckedLike(false);
   setChangeTitle('Oração');

  }

  if (isCheckedLike === false) {
   setIsCheckedPray(false);
   setIsCheckedLike(true);
   setChangeTitle('Agradecimento');
  }

 }

 async function handleCreateNewMessage(e: FormEvent) {
  e.preventDefault();

  let newName = name;

  if (!isCheckedPray) {
   messageType = 0;
  }

  if (newName.length <= 1) {
   newName = 'Anonimo';
  }

  await createMessage({
   name: newName,
   message,
   messageType
  });

  setChangeTitle('Oração');
  setName('');
  setMessage('');
  setIsCheckedPray(true);
  setIsCheckedLike(false);

  onRequestClose();
 }


 return (

  <Modal
   isOpen={isOpen}
   onRequestClose={onRequestClose}
   overlayClassName="react-modal-overlay"
   className="react-modal-content"
  >

   <Container onSubmit={handleCreateNewMessage}>
    <h2>Novo pedido de {changeTitle}!</h2>
    <p>Você pode fazer o seus pedidos de oração ou agradecimento de forma anonima!</p>

    <input className="modal-imput" placeholder="Seu nome aqui" value={name} onChange={e => { setName(e.target.value) }} />


    <div className="order-selector">
     <label className="switch">
      <input name="pray" type="checkbox" checked={isCheckedPray} onClick={(e) => { handleSelectors() }} />
      <span className="slider" />
     </label>
     <h3>Oração</h3>
     <img className="img-pray" src={pray} alt="pray" />
    </div>

    <div className="order-selector">
     <label className="switch">
      <input type="checkbox" checked={isCheckedLike} onChange={(e) => { handleSelectors() }} />
      <span className="slider" />
     </label>
     <h3>Agradecimento</h3>
     <img className="img-like" src={like} alt="like" />
    </div>

    <textarea placeholder={`Digite sua mensagem de ${changeTitle} aqui!`} value={message} onChange={e => { setMessage(e.target.value) }} required />
    <button type="submit">Enviar mensagem!</button>
   </Container>

  </Modal>
 )
}