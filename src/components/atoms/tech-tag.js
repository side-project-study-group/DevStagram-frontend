import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  background-color: lightgray;
  width: fit-content;
  margin: 5px 5px 0 0;
  padding: 0 5px;
  border-radius: 3px;
  box-sizing:border-box;
`;

function TechTag({name, tech, handleClick}) {
  return <Span name={name} onClick={handleClick}>#{tech}</Span>;
}

export default TechTag;
