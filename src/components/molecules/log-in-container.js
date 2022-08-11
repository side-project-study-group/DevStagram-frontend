import React from 'react';
import Buttons from '../atoms/buttons';
import Description from '../atoms/description';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  input {
    width: 380px;
  }
`;

function LogInContainer() {
  return (
    <Container>
      <Buttons name={'Forgot Password?'} />
      <Description define={"Don't have an account?"} />
      <Buttons name={'Sign up'} />
      <Buttons name={'Sign in with Google'} />
      <Buttons name={'Log in'} />
    </Container>
  );
}
export default LogInContainer;
