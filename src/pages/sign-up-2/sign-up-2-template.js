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

function SignUp2({value, handleChange, handleSubmit}) {
  return (
    <Container>
      <Input name={'nickname'} value={value['nickname']} type={"text"} placeholder={'Nickname'} handleChange={handleChange} />
      <Input name={'github'} value={value['github']} type={"url"} placeholder={'Github Url'} handleChange={handleChange} />
      <Input name={'blog'} value={value['blog']} type={"url"} placeholder={'Blog Url'} handleChange={handleChange} />
      <Buttons name={'Next'} onClick={handleSubmit}/>
      
    </Container>
  );
}
export default SignUp2;
