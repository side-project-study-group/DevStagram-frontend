import React from 'react';
import styled from 'styled-components';

const Container=styled.div`
background-color:rgba(250, 250, 248, 1);
color: rgba(65, 64, 66, 1);
width: 100%;
border: 1px solid rgba(65, 64, 66, 1);
border-radius: 5px;
padding: 5px 12px;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;
margin: 8px 0;
box-sizing: border-box;
`

const P = styled.p`
  color: #414141;
  width: 38.46px;
  height: 14px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  margin : 0;
`;

const A = styled.a`
  color: rgba(65, 65, 65, 1);
  width: 305px;
  height: 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  text-decoration-line: underline;
`;


function Urls() {
  return (
    <Container>
      <P>Github</P>
      <A href='#'>github.com</A>
      <P>Blog</P>
      <A href='#'>blog.com</A>
    </Container>
  );
}

export default Urls;
