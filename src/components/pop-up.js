import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
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
  top: 40%;
`;

const Contents = styled.div`
  background-color: lightgreen;
  padding: 5px 20px;
  border-radius: 10px;
  text-align: center;
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5px;
  gap: 10px;
  button {
    width: 100%;
    background-color: gray;
    border: none;
    font-size: 15px;
    border-radius: 5px;
    padding: 5px 10px;
  }
`;

function PopUp() {
  return (
    <Wrapper>
      <Container>
        <Contents>
          <p>
            이 밋업은 오픈 밋업입니다.
            <br />
            신청을 누르면 바로 단체방으로 이동합니다.
            <br />
            참여하시겠습니까?
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
