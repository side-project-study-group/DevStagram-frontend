import React, { useState } from 'react';
import Input from '../../components/atoms//input.js';
import TextArea from '../../components/atoms//text-area.js';
import TechTag from '../../components/atoms/tech-tag';
import Buttons from '../../components/atoms/buttons';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  margin: 20px;
  input {
    width: 380px;
  }
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

function SignUp3() {
  const [techTags, setTechTags] = useState(['JAVA', 'JavaScript', 'React']);

  function inputHandler(e) {
    if (e.target.value.includes(' ')) {
      console.log('공백임!');
      setTechTags([...techTags, e.target.value]);
    } else {
      console.log('공백아님!');
    }
    // e.stopPropagation();
  }
  return (
    <Container>
      <TextArea placeholder={'자기소개를 입력 해주세요.'} />
      <Input
        placeholder={'기술 스택을 입력하세요'}
        handleChange={inputHandler}
      />
      {techTags.map(function (tech, i) {
        return <TechTag className='list' key={i} tech={tech} />;
      })}
      <Buttons name={'Next'} />
    </Container>
  );
}
export default SignUp3;
