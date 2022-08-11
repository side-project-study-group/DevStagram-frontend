import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(220, 220, 220, 0.4);
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 99;
`;

const Container = styled.div`
  position: fixed;
  box-sizing: border-box;
  width: 100%;
  max-width: 480px;
  padding: 0 20px;
  top: 40%;
  ::before {
    background-color: rgba(250, 215, 120, 1);
    height: 30px;
    content: '';
    display: block;
    border-radius: 10px 10px 0 0;
    border: 1.5px solid rgba(65, 64, 66, 1);
    border-bottom: none;
  }
`;

const Contents = styled.div`
  background-color: rgba(250, 250, 248, 1);
  border: 1.5px solid rgba(65, 64, 66, 1);
  padding: 5px 20px;
  border-radius: 0 0 10px 10px;
  text-align: center;
  font-family: 'NotoSansKrBold';
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5px;
  justify-content: space-evenly;
  button {
    width: 120px;
    border: 1.5px solid rgba(65, 64, 66, 1);
    font-size: 17px;
    border-radius: 15px;
    padding: 5px;
    font-family: 'RobotoBold';
    cursor: pointer;
    :first-child {
      background-color: rgba(217, 217, 217, 1);
    }
    :nth-child(2) {
      background-color: rgba(75, 100, 230, 1);
      color: white;
    }
  }
`;

function PopUp() {
  return (
    <Wrapper>
      <Container>
        <Contents>
          <p>
            참여하기를 누르면 단톡방으로 이동합니다.
            <br /> 밋업에 참여하시겠습니까?
          </p>
          <ButtonContainer>
            <button>Cancel</button>
            <button>OK</button>
          </ButtonContainer>
        </Contents>
      </Container>
    </Wrapper>
  );
}

export default PopUp;
