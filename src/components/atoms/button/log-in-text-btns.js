import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  color:rgba(75, 100, 230, 1);
  font-family:'Noto Sans CJK KR';
  font-weight:500;
  font-size: 15px;
  text-align:right;
  line-height: 13px;
  margin:0;
`;

function LogInTextBtns({text}) {
  return <P>{text}</P>;
}

export default LogInTextBtns;
