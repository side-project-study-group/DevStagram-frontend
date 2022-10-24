import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SelectContainer from '../../components/molecules/select-container'
import InputContainer from '../../components/molecules/input-container'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import Label from '../../components/atoms/texts/label'
import TextArea from '../../components/atoms/inputs/text-area'
import useForm from '../../hooks/useForm'
import useMeetUpForm from './useMeetUpForm'

const Section = styled.section`
    width: 100%;
    height: 100%;
    max-width: 480px;
    margin: 0 auto;
    padding: 10px 10px;
    box-sizing: border-box;
    background-color: rgba(250, 250, 248, 1);
`

const MeetUpContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    input {
        display: block;
        flex-grow: 1;
        height: 100px;
    }
`

function MeetUpFormTemp() {
    const { form, state, handleChange, handleSubmit } = useForm()
    const handleForm = useMeetUpForm(state)

    return (
        <Section>
            <form onSubmit={handleSubmit}>
                <SelectContainer
                    name={'category'}
                    label={'카테고리'}
                    value={form.category || 'none'}
                    options={dummyCategories}
                    handleChange={handleChange}
                />
                <InputContainer
                    name={'title'}
                    label={'제목'}
                    value={form.title || ''}
                    handleChange={handleChange}
                />
                <MeetUpContentContainer>
                    <Label label={'내용'} />
                    <TextArea
                        name={'contents'}
                        handleChange={handleChange}
                        value={form.contents}
                    />
                </MeetUpContentContainer>
                <SelectContainer
                    width={'20%'}
                    label={'인원수'}
                    name={'maxPeople'}
                    value={form.maxPeople || 'none'}
                    options={dummyNumbers}
                    handleChange={handleChange}
                />
                <SelectContainer
                    width={'20%'}
                    label={'참여방식'}
                    name={'isOpenYn'}
                    value={form.isOpenYn || true}
                    options={dummyJoinTypes}
                    handleChange={handleChange}
                />
            </form>
            <FooterBtn handleClick={() => handleForm(form)}>게시하기</FooterBtn>
        </Section>
    )
}

export default MeetUpFormTemp

const dummyCategories = [
    { text: '밋업의 종류를 골라주세요.', value: 'none' },
    { text: '프로젝트', value: 'PROJECT' },
    { text: '스터디', value: 'STUDY' },
    { text: '네트워킹', value: 'NETWORK' },
]
const dummyNumbers = [
    { text: '선택', value: 'none' },
    { text: '2', value: 2 },
    { text: '3', value: 3 },
    { text: '4', value: 4 },
    { text: '5', value: 5 },
    { text: '6', value: 6 },
    { text: '7', value: 7 },
    { text: '8', value: 8 },
    { text: '9', value: 9 },
    { text: '10', value: 10 },
]
const dummyJoinTypes = [
    { text: '오픈밋업', value: true },
    { text: '프라이빗밋업', value: false },
]
