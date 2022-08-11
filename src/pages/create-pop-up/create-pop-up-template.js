import React from 'react';
import styled from 'styled-components';
import CreateButton from '../../components/atoms/create-button';
import { BiSmile } from 'react-icons/bi';
import { BsPencilSquare } from 'react-icons/bs';

const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  max-width: 480px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: end;
  gap: 15px;
  box-sizing: border-box;
  padding-right: 30px;
  padding-bottom: 120px;
`;

function CreatePopUpTemp() {
  return (
    <Section>
      <Wrapper>
        <CreateButton icon={<BiSmile />} text={'New Meet Up'} />
        <CreateButton icon={<BsPencilSquare />} text={'New Post'} />
      </Wrapper>
    </Section>
  );
}

export default CreatePopUpTemp;
