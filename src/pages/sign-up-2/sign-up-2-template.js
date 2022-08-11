import React from 'react';
import Input from '../../components/atoms//input.js';
import Buttons from '../../components/atoms/buttons';
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

function SignUp2() {
  return (
    <Container>
      <Input placeholder={'Nickname'} />
      <Input placeholder={'Github Url'} />
      <Input placeholder={'Blog Url'} />
      <Buttons name={'Next'} />
    </Container>
  );
}
export default SignUp2;
