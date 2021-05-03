import styled from 'styled-components';

export const Container = styled.form`
h2{
 color: var(--text-title);
 font: 1.5rem;
 margin-bottom: 2rem;
}

input{
 width: 100%;
 padding: 0 1.5rem;
 height: 4rem;
 border-radius: 0.25rem;
 border: 1px solid #d7d7d7;
 background: #e7e9ee;
 font-weight: 400;
 font-size: 1rem;
 & + input{
 margin-top: 1rem;

 }
 & + textarea{
 margin-top: 1rem;

 }
}

textarea{
 padding-right: 30px;
 width: 100%;
 height: 600px;
 padding: 0 1.5rem;
 height: 4rem;
 border-radius: 0.25rem;
 border: 1px solid #d7d7d7;
 background: #e7e9ee;
 font-weight: 400;
 font-size: 1rem;
 overflow: hidden;

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