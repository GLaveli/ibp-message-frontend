import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

import pray from '../assets/pray.png';
import like from '../assets/like.png';


interface ApiMessage {
  id: string;
  name: string;
  message: string;
  messageType: number;
  created_at: Date;
}


export function TransactionsTable() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    api.get('message')
      .then(response => setMessages(response.data));
  }, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Mensagem</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message: ApiMessage) => (
            <tr key={message.id}>
              <td>{message.messageType ?
                <img className="pray" src={pray} alt='pray' /> :
                <img className="like" src={like} alt='like' />}
              </td>
              <td className="deposit">{message.name}</td>
              <td>{message.message}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(
                new Date(message.created_at)
              )}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </Container>
  )
}