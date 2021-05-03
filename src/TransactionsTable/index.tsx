import { useEffect, useState } from "react";
import { api } from "../services/api";
import { Container } from "./styles";

interface ApiMessage {
  id: string;
  name: string;
  message: string;
  messageType: number;
}


export function TransactionsTable() {

  const [messages, setMessages] = useState([]);
  const today = new Date();

  var day = today.getDate();
  var month = today.getMonth();
  var year = today.getFullYear();

  useEffect(() => {
    api.get('message')
      .then(response => setMessages(response.data));
  }, []);


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mensagem</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message: ApiMessage) => (
            <tr key={message.id}>
              <td className="deposit">{message.name}</td>
              <td>{message.message}</td>
              <td>{`${day}/${month + 1}/${year}`}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </Container>
  )
}