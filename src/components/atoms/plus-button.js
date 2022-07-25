import React from "react";
import styled from "styled-components";
import { BsPlusLg } from "react-icons/bs";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 480px;
  display: flex;
  justify-content: end;
  align-items: flex-end;
  box-sizing: border-box;
`;

const BtnContainer = styled.div`
  z-index: 99;
  margin-right: 30px;
  margin-bottom: 50px;
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fab923;
  border: 2px solid #414042;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 3px 0px rgba(0, 0, 0, 0.1);
  button {
    font-size: 25px;
    background-color: transparent;
    border: none;
    color: #414042;
    padding: 0;
    display: flex;
    align-items: center;
  }
  :hover {
    background-color: #ffffff;
    button {
      transition: all 0.5s ease-in-out;
      transform: rotate(45deg);
    }
  }
`;

function PlusButton() {
  return (
    <Wrapper>
      <Container>
        <BtnContainer>
          <button>
            <BsPlusLg />
          </button>
        </BtnContainer>
      </Container>
    </Wrapper>
  );
}

export default PlusButton;
