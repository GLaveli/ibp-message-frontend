import { useContext } from 'react';
import pray from '../../assets/pray.png';
import { MessagesContext } from '../../MessagesContext';

import { Container } from "./stles";

export function Summary() {

 const { messages } = useContext(MessagesContext);

 return (
  <Container >
   <div>
   </div>
   <div className="highlight-background">
    <header>
     <p>Total de pedidos</p>
     <img src={pray} alt="Entradas" />
    </header>
    <strong>0</strong>
   </div>
   <div>
   </div>
  </Container>
 )
}