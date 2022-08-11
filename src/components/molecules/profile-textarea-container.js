import React from 'react';
import Title from '../atoms/title';
import TextArea from '../atoms/text-area';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  textarea {
    width: 380px;
  }
`;

function ProfileTextAreaContainer({ title, placeholder }) {
  return (
    <Container>
      <Title title={title} />
      <TextArea placeHolder={placeholder} />
    </Container>
  );
}
export default ProfileTextAreaContainer;
