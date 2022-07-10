import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/input';
import { IoPersonOutline } from 'react-icons/io5';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 5px 0;
  label {
    background-color: pink;
    padding: 5px 5px;
    margin-right: 10px;
  }
  input {
    flex-grow: 1;
  }
`;

function InputContainer({ label }) {
  return (
    <Container>
      <label>
        {label === '인원수' && <IoPersonOutline />}
        {label}
      </label>
      <Input />
    </Container>
  );
}

export default InputContainer;
