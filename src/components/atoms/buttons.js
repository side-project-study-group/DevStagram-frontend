import React from 'react';
import styled from 'styled-components';

const ButtonContainer=styled.div`
`

const Button = styled.button`
  display: block;
  background-color: ${(props)=>(props.backgroundColor==='white'?'rgba(217, 217, 217, 1)':'rgba(75, 100, 230, 1)')};
  color: ${(props)=>(props.color==='black'?'rgba(65, 64, 66, 1)':'white')};
  white;
  width: 200px;
  margin: 0 auto;
  padding: 10px;
  font-size: 18px;
  border-radius: 25px;
  border : 2px solid rgba(65, 64, 66, 1);
  box-sizing:border-box;
`;

function Buttons({ name, onClick, backgroundColor, color }) {
  return (
    <ButtonContainer 
    backgroundColor={backgroundColor} 
    color={color}>
      <Button onClick={onClick} >{name}</Button>
    </ButtonContainer>
  )

}
export default Buttons;
