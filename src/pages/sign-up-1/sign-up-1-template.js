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

function SignUp1({handleChange, value, handleSubmit }) {
  return (
    <Container>
      <Input name={"email"} value={value['email']} type={"email"}placeholder={'E-mail'} handleChange={handleChange} />
      <Input name={"password"} value={value['password']} type={"password"} placeholder={'Password'} handleChange={handleChange} />
      <Input name={"confirmPassword"} value={value['confirmPassword']} type={"password"} placeholder={'Confrim Password'} handleChange={handleChange} />
      <Buttons name={'Next'} onClick={handleSubmit}/>
    </Container>
  );
}
export default SignUp1;
