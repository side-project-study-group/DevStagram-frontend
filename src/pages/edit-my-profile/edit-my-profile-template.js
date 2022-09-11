import React, { useState } from 'react'
import ProfileInputContainer from '../../components/molecules/profile-input-container'
import ProfileTextAreaContainer from '../../components/molecules/profile-textarea-container'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import ProfileImg from '../../components/atoms/profile-images/profile/profile-img'
import TechTag from '../../components/atoms/tags/tech/tech'
import checkImg from '../../assets/imgs/check.png'
import styled from 'styled-components'

const Wrapper = styled.section`
    position: absolute;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 0 16px 50px 16px;
    box-sizing: border-box;
`

const BlueHeader = styled.div`
    background-color: #4b64e6;
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 0 -10px;
    img {
        width: 100%;
        vertical-align: top;
    }
`
const InputContainer = styled.div`
    width: 100%;
    margin: 25px 0 40px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
`
const TagContainer = styled.div`
    display: flex;
`

function EditMyProfileTemp() {
    const [techTags, setTechTags] = useState(['JAVA', 'JavaScript', 'React'])

    function inputHandler(e) {
        if (e.target.value.includes(' ')) {
            console.log('공백임!')
            setTechTags([...techTags, e.target.value])
        } else {
            console.log('공백아님!')
        }
        e.stopPropagation()
    }

    return (
        <Wrapper>
            <BlueHeader>
                <img src={checkImg}></img>
            </BlueHeader>
            <Container>
                <ProfileImg
                    size="medium"
                    marginTop="-40px"
                    onClick={() => {
                        console.log('click')
                    }}
                />
                <InputContainer>
                    <ProfileInputContainer
                        title={'닉네임'}
                        placeholder={'닉네임을 입력하세요.'}
                    />
                    <ProfileInputContainer
                        title={'기술태그'}
                        placeholder={'기술스택을 입력 하세요.'}
                        handleChange={inputHandler}
                    />
                    <TagContainer>
                        {techTags.map(function (tech, i) {
                            return (
                                <TechTag className="list" key={i} tech={tech} />
                            )
                        })}
                    </TagContainer>

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
                </InputContainer>
            </Container>
            <FooterBtn text={'저장하기'} />
        </Wrapper>
    )
}

export default EditMyProfileTemp
