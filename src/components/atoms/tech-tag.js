import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  display: inline-block;
  background-color: lightgray;
  width: fit-content;
  margin: 5px 5px 0 0;
  padding: 0 5px;
  border-radius: 3px;
`;

function TechTag({ tech }) {
  return <Span>#{tech}</Span>;
}

export default TechTag;
