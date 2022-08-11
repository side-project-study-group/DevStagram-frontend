import React from 'react';
import styled from 'styled-components';

const Span = styled.span`
  color: rgba(185, 185, 185, 1);
  font-size: 10px;
  margin-left: 5px;
`;

function TimeLine() {
  return <Span> 15시간 전</Span>;
}

export default TimeLine;
