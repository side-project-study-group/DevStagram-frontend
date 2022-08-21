import React from 'react';
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

function SignUp3({value, text, tags, handleChange, handleTagChange, handleTagClick, handleSubmit}) {
 
  return (
    <Container>
      <TextArea name={"intro"} value={value['intro']} handleChange={handleChange} placeholder={'자기소개를 입력 해주세요.'} />
      <Input
        name={'tag'}
        value={text}
        type={"text"}
        placeholder={'기술 스택을 입력하세요'}
        handleChange={handleTagChange}
      />
      {tags.map(function (tech, i) {
        return <TechTag key={i} name={tech} tech={tech} handleClick={handleTagClick} />;
      })}
      <Buttons name={'Next'} onClick={handleSubmit}/>
    </Container>
  );
}
export default SignUp3;
