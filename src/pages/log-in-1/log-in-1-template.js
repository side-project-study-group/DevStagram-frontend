import React from 'react';
import Input from '../../components/atoms//input.js';
import LogInContainer from '../../components/molecules/log-in-container';
import PopUpContainer from '../../components/molecules/pop-up-container';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 20px;
  input {
    width: 380px;
  }
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
function LogInTemp1() {
  return (
    <>
      <Container>
        <Input placeholder={'E-mail'} />
        <Input placeholder={'Password'} />
        <LogInContainer />
      </Container>
      <PopUpContainer />
    </>
  );
}

export default LogInTemp1;
