import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  color:${(props)=>(props.color==='rgba(65, 65, 65, 0.8)')?'rgba(65, 65, 65, 0.8) ':'rgba(180, 180, 180, 1)'};
  font-family: 'Noto Sans CJK KR';
  font-weight: 500;
  font-size: ${(props)=>(props.fontSize === 'medium'? '15px':'13px')};
  line-height: 13px;
  color: rgba(65, 65, 65, 0.8);
  margin:0;
  text-align:${(props)=>(props.textAlign)};
`;

function Description({ define,color,fontSize,textAlign }) {
  return <P 
          color={color} 
          fontSize={fontSize}
          textAlign={textAlign}>{define}</P>;
}

export default Description;
