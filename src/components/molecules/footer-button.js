import React from "react";
import styled from "styled-components";

const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  padding: 0 10px;
  bottom: 0;
`;

const Button = styled.div`
  width: 100%;
  height: 50px;
  line-height: 50px;
  margin-bottom: 2vh;
  background-color: lightblue;
  border-radius: 10px;
  text-align: center;
  border: none;
`;

function FooterBtn() {
  return (
    <Footer>
      <Container>
        <Button>확인</Button>
      </Container>
    </Footer>
  );
}

export default FooterBtn;
