import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const Container = styled.div`
  box-sizing: border-box;
  max-width: 480px;
  padding: 0 10px;
  bottom: 0;
`;

const Button = styled.div`
  padding: 0 60px;
  height: 40px;
  line-height: 40px;
  background-color: rgba(75, 100, 230, 1);
  border-radius: 20px;
  text-align: center;
  border: 2px solid rgba(65, 64, 66, 1);
  color: #ffffff;
  font-family: 'NotoSansKRBold';
`;

function FooterBtn({ text }) {
  return (
    <Footer>
      <Container>
        <Button>{text}</Button>
      </Container>
    </Footer>
  );
}

export default FooterBtn;
