import React from 'react';
import Buttons from '../atoms/buttons';
import Description from '../atoms/description';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  input {
    width: 380px;
  }
`;

function PopUpContainer() {
  return (
    <Container>
      <Description
        define={'메일 주소 또는 비밀번호의 오류입니다. 다시 시도하시겠습니다?'}
      />
      <Buttons name={'Cancle'} />
      <Buttons name={'Ok'} />
    </Container>
  );
}
export default PopUpContainer;
