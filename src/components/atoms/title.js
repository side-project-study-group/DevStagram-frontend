import React from 'react';
import styled from 'styled-components';

const P = styled.p`
  font-size: 16px;
`;

function Title({ title }) {
  return <P>{title}</P>;
}

export default Title;

// 함수형 컴포넌트 파라미터 뭐가 들어올까요? 프롭스?뭘까요? 함수형 컴포넌트 프롭스
// 구조분해 할당.
// 아래 처럼 작성해도됨.

// function Title(props) {
//   const { title } = props;

//   return <p>{title}</p>;
// }
