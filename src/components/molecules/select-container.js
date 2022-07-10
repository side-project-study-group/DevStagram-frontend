import React from 'react';
import styled from 'styled-components';
import Select from '../atoms/select';

const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 5px 0;
  label {
    background-color: pink;
    padding: 5px 5px;
    margin-right: 10px;
  }
  select {
    flex-grow: 1;
  }
`;

function SelectContainer({ label, options }) {
  return (
    <Container>
      <label>{label}</label>
      <Select options={options} />
    </Container>
  );
}

export default SelectContainer;
