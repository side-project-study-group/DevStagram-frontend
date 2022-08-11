import React, { useState } from 'react';
import ProfileInputContainer from '../../components/molecules/profile-input-container';
import ProfileTextAreaContainer from '../../components/molecules/profile-textarea-container';
import Buttons from '../../components/atoms/buttons';
import ProfileImg from '../../components/atoms/porfile-img';
import TechTag from '../../components/atoms/tech-tag';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%
  margin: 10px auto;
  padding: 0 10px;
`;

function EditMyProfileTemp() {
  const [techTags, setTechTags] = useState(['JAVA', 'JavaScript', 'React']);

  function inputHandler(e) {
    if (e.target.value.includes(' ')) {
      console.log('공백임!');
      setTechTags([...techTags, e.target.value]);
    } else {
      console.log('공백아님!');
    }
    e.stopPropagation();
  }

  return (
    <Container>
      <ProfileImg
        onClick={() => {
          console.log('click');
        }}
      />
      <ProfileInputContainer
        title={'닉네임'}
        placeholder={'닉네임을 입력하세요.'}
      />
      <ProfileInputContainer
        title={'기술태그'}
        placeholder={'기술스택을 입력 하세요.'}
        handleChange={inputHandler}
      />
      {techTags.map(function (tech, i) {
        return <TechTag className='list' key={i} tech={tech} />;
      })}

      {/* <TechTag tech={'java'}/> */}
      <ProfileTextAreaContainer
        title={'자기소개'}
        placeholder={'자기소개를 작성하세요.'}
      />
      <ProfileInputContainer
        title={'Github URL'}
        placeholder={'github 주소를 입력 하세요.'}
      />
      <ProfileInputContainer
        title={'Blog URL'}
        placeholder={'blog 주소를 입력 하세요.'}
      />
      <Buttons name={'저장하기'} />
    </Container>
  );
}

export default EditMyProfileTemp;
