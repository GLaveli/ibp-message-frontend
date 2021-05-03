import totalImg from '../../assets/total.svg';

import { Container } from "./stles";

export function Summary() {
 return (
  <Container >
   <div>
   </div>
   <div className="highlight-background">
    <header>
     <p>Total de mensagens</p>
     <img src={totalImg} alt="Entradas" />
    </header>
    <strong>0</strong>
   </div>
   <div>
   </div>
  </Container>
 )
}