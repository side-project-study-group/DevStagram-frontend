import React from 'react';
import LinkText from '../atoms/buttons/link-text';
import FooterBtn from '../../components/atoms/buttons/footer-button';
import Description from '../atoms/texts/description';
import GoogleLogInImg from '../../components/atoms/image-container/google-log-in-img'
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
      <LinkText text={'Forgot Password?'}/>
      <ConfirmSign>
        <Description 
          define={"Don't have an account?"} 
          color={'rgba(180, 180, 180, 1)'} 
          fontSize={'medium'}/>
        <LinkText text={'Sign up?'}/>
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
