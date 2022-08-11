import React from 'react';
import Title from '../atoms/title';
import Input from '../atoms/input';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  input {
    width: 380px;
  }
`;

function ProfileInputContainer({ title, placeholder, handleChange }) {
  return (
    <Container>
      <Title title={title} />
      <Input placeholder={placeholder} handleChange={handleChange} />
    </Container>
  );
}
export default ProfileInputContainer;
