import React from 'react';
import Input from '../../components/atoms//input.js';
import SignUpImg from '../../components/atoms/sign-up-img'
import FooterBtn from '../../components/atoms/footer-button';
import H1Tag from '../../components/atoms/h1-sign.js';
import image from'../../assets/imgs/background.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: url(${image}) no-repeat center center fixed;
  background-size:cover;
  width:100%;
  height:100%;
  max-width:480px;
  margin:0 auto;
  padding: 30px 20px 20px 20px ;
  box-sizing:border-box;
`;

const Container=styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height:100%;
  margin: 0 auto;
  padding: 110px 0 10px 0;
  border-radius: 50px 50px 0px 0px;
  box-sizing:border-box;
`;
const InpuContainer=styled.div`
  padding:10px;
  display:flex;
  flex-direction:column;
  gap: 40px;
  box-sizing:border-box;
  `;

  const ButtonContainer=styled.div`
  position: absolute;
  left:0;
  right:0;
  bottom: 45px;
  margin:0 auto;
  `;
  
function SignUp2({value, handleChange, handleSubmit}) {
  return (
    <Wrapper>
      <Container>
        <InpuContainer>
          <H1Tag sign={'Sign Up'}/>
          <SignUpImg/>
          <Input name={'nickname'} value={value['nickname']} type={"text"} placeholder={'Nickname'} handleChange={handleChange} />
          <Input name={'github'} value={value['github']} type={"url"} placeholder={'Github Url'} handleChange={handleChange} />
          <Input name={'blog'} value={value['blog']} type={"url"} placeholder={'Blog Url'} handleChange={handleChange} />
        </InpuContainer>
        <ButtonContainer>
          <FooterBtn text={'Next'} onClick={handleSubmit} />
        </ButtonContainer>
      </Container>     
    </Wrapper>
  );
}
export default SignUp2;
