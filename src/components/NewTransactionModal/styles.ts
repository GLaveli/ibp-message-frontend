import styled from 'styled-components';

export const Container = styled.form`

h2{
 color: var(--text-title);
 font: 1.5rem;
 margin-bottom: 2rem;
}

p{
 font-size: .90rem
}

.switch{
 position: relative;
 display: inline-block;
 width: 40px;
 height: 20px;

input{
 opacity: 0;
 width: 0;
 height: 0;
}


.slider{
position: absolute;
cursor: pointer;

top: 0;
left: 0;
right: 0;
bottom: 0;

border-radius: 20px;

background: #ccc;
}

.slider::before{
position: absolute;
content: "";
height: 15px;
width: 20px;
left: 4px;
bottom: 3px;
border-radius: 15px;
background: white;
transition: 0.3s;
}

input:checked + .slider{
background: var(--green);

}

input:checked + .slider::before{
 transform: translateX(12px);
}

}

.modal-imput{
 width: 100%;
 padding: 0 1.5rem;
 height: 4rem;
 border-radius: 0.25rem;
 border: 1px solid #d7d7d7;
 background: #e7e9ee;
 font-weight: 400;
 font-size: 1rem;

 & + div{
 margin-top: 1rem;
 margin-bottom: 1rem;
 }
}

.order-selector{
display: flex;
flex-direction: row;
align-items: center;

h3{
 margin-left: 10px;
}

.img-pray{
 margin-left: 5px;
 width: 30px;
}
.img-like{
 margin-left: 5px;
 width: 20px;
}
}


textarea{
 padding-right: 30px;
 width: 100%;
 padding: 0 1.5rem;
 height: 4rem;
 border-radius: 0.25rem;
 border: 1px solid #d7d7d7;
 background: #e7e9ee;
 font-weight: 400;
 font-size: 1rem;
 overflow: hidden;
 margin-top: 1rem;

 & + input{
 margin-top: 1rem;

 }
}

button[type="submit"]{
 width: 100%;
 padding: 0 1.5rem;
 height: 4rem;
 background: var(--green);
 color: #fff;
 border-radius: 0.25;
 border: 0;
 font-size: 1rem;
 margin-top: 1.5rem;
}
`;