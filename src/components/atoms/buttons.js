import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: block;
  background-color: blue;
  color: white;
  width: 180px;
  margin: 40px auto;
  padding: 10px;
  font-size: 18px;
  border-radius: 15px;
`;

function Buttons({ name, onClick }) {
  return <Button onClick={onClick}>{name}</Button>;
}
export default Buttons;
