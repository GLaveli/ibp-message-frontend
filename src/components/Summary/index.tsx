import pray from '../../assets/pray.png';

import { Container } from "./stles";

export function Summary() {
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