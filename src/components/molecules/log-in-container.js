import React from 'react';
import LogInTextBtns from '../atoms/button/log-in-text-btns';
import FooterBtn from '../../components/atoms/footer-button';
import Description from '../atoms/description';
import GoogleLogInImg from '../../components/atoms/google-log-in-img'
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  gap:10px;
  width: 100%;
  input {
    max-width: 380px;
  }
  padding:10px;
  box-sizing:border-box;
`;

const ConfirmSign=styled.div`
  display: flex;
  gap:3px;
  justify-content:center;
  margin-top:40px;
`

const ButtonContainer=styled.div`
  display:flex;
  flex-direction:column;
  gap: 17px;
`

function LogInContainer() {
  return (
    <Container>
      <LogInTextBtns text={'Forgot Password?'}/>
      <ConfirmSign>
        <Description 
          define={"Don't have an account?"} 
          color={'rgba(180, 180, 180, 1)'} 
          fontSize={'medium'}/>
        <LogInTextBtns text={'Sign up?'}/>
      </ConfirmSign>
      <Description 
        define={'Or'} 
        color={'rgba(180, 180, 180, 1)'}  
        fontSize={'medium'}
        textAlign={'center'}/>
      <ButtonContainer>
        <GoogleLogInImg/>
        <FooterBtn text={'Login'}/>
      </ButtonContainer>
    </Container>
  );
}
export default LogInContainer;
