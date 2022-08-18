import React from 'react';
import Title from '../atoms/title';
import Input from '../atoms/input';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width:480px;
  display:flex;
  flex-direction:column;
  gap:8px;
`;

function ProfileInputContainer({ title, placeholder, handleChange }) {
  return (
    <Container>
      <Title title={title} size={'medium'}/>
      <Input placeholder={placeholder} handleChange={handleChange} />
    </Container>
  );
}
export default ProfileInputContainer;
