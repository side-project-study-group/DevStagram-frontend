import React, { useState } from 'react';
import SignUpImg from '../../components/atoms/image-containers/sign-up-img'
import Input from '../../components/atoms/inputs/input';
import TextArea from '../../components/atoms/inputs/text-area';
import TechTag from '../../components/atoms/tags/tech/tech';
import FooterBtn from '../../components/atoms/buttons/footer-button';
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
  padding:10px;
  display:flex;
  flex-direction:column;
  gap: 40px;
  box-sizing:border-box;
  `;

  const TagContainer=styled.div`
  width:100%;
  display: flex;
  flex-wrap:wrap;
  box-sizing:border-box;
  padding: 10px;
  `;

  const ButtonContainer=styled.div`
  position: absolute;
  left:0;
  right:0;
  bottom: 45px;
  margin:0 auto;
  `;

function SignUp3Temp({value, text, tags, handleChange, handleTagChange, handleTagClick, handleSubmit}) {
 

  return (
    <Wrapper>
      <Container>
        <SignUpImg/>
        <InpuContainer>
        <TextArea name={"intro"} value={value['intro']} handleChange={handleChange} placeholder={'자기소개를 입력 해주세요.'} />
        <Input
          name={'tag'}
          value={text}
          type={"text"}
          placeholder={'기술 스택을 입력하세요'}
          handleChange={handleTagChange}
        />
        </InpuContainer>
        <TagContainer>
        {tags.map(function (tech, i) {
          return <TechTag key={i} name={tech} tech={tech} handleClick={handleTagClick} />;
        })}
        </TagContainer>
        <ButtonContainer>
          <FooterBtn text={'Next'} handleClick={handleSubmit}/>
        </ButtonContainer>
      </Container>
    </Wrapper>
    
  );
}
export default SignUp3Temp;
