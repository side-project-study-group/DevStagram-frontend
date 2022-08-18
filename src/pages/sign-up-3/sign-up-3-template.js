import React, { useState } from 'react';
import SignUpImg from '../../components/atoms/sign-up-img'
import Input from '../../components/atoms//input.js';
import TextArea from '../../components/atoms//text-area.js';
import TechTag from '../../components/atoms/tech-tag';
import FooterBtn from '../../components/atoms/footer-button';
import image from'../../assets/imgs/background.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: url(${image}) no-repeat center center fixed;
  background-size:cover;
  width:100%;
  height:100%;
  max-width:480px;
  margin:0 auto;
  padding: 30px 20px 20px 20px ;
  box-sizing:border-box;
`;

const Container=styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height:100%;
  margin: 0 auto;
  padding: 110px 0 10px 0;
  border-radius: 50px 50px 0px 0px;
  box-sizing:border-box;
`;

const InpuContainer=styled.div`
  width: 360px
  margin:0 auto;
  padding:10px;
  display:flex;
  flex-direction:column;
  gap: 40px;
  box-sizing:border-box;
  `;

  const TagContainer=styled.div`
  display: flex;
  `;

  const ButtonContainer=styled.div`
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
    <Wrapper>
      <Container>
        <SignUpImg/>
        <InpuContainer>
        <TextArea placeholder={'자기소개를 입력 해주세요.'} />
        <Input
          placeholder={'기술 스택을 입력하세요'}
          handleChange={inputHandler}
        />
        </InpuContainer>
        <TagContainer>
        {techTags.map(function (tech, i) {
          return <TechTag className='list' key={i} tech={tech} />;
        })}
        </TagContainer>
        <ButtonContainer>
          <FooterBtn text={'Next'}/>
        </ButtonContainer>
      </Container>
    </Wrapper>
    
  );
}
export default SignUp3;
