import React from 'react';
import styled from 'styled-components';
import Input from '../atoms/input';
import Label from '../atoms/label';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.width ? 'row' : 'column')};
  justify-content: space-between;
  margin: 15px 0;
`;

function InputContainer({ label, width }) {
  return (
    <Container width={width}>
      <Label label={label} />
      <Input width={width} type={label === 'μΈμμ' ? 'number' : 'text'} />
    </Container>
  );
}

export default InputContainer;
