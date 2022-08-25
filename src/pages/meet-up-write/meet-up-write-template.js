import React from 'react'
import styled from 'styled-components'
import SelectContainer from '../../components/molecules/select-container'
import InputContainer from '../../components/molecules/input-container'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import Label from '../../components/atoms/texts/label'
import TextArea from '../../components/atoms/inputs/text-area'
import useForm from '../../hooks/useForm'

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

function MeetUpWriteTemp() {
    const { form, handleChange, handleSubmit } = useForm()

    return (
        <Section>
            <form onSubmit={handleSubmit}>
                <SelectContainer
                    label={'카테고리'}
                    options={dummyCategories}
                    handleChange={handleChange}
                />
                <InputContainer label={'제목'} handleChange={handleChange} />
                <MeetUpContentContainer>
                    <Label label={'내용'} />
                    <TextArea name={'내용'} handleChange={handleChange} />
                </MeetUpContentContainer>
                <InputContainer
                    width={'20%'}
                    label="인원수"
                    handleChange={handleChange}
                />
                <SelectContainer
                    width={'20%'}
                    label={'참여방식'}
                    options={dummyJoinTypes}
                    handleChange={handleChange}
                />
                <SelectContainer
                    width={'20%'}
                    label={'밋업상태'}
                    options={dummyMeetUpStates}
                    handleChange={handleChange}
                />
            </form>
            <FooterBtn
                handleClick={() => console.log(form)}
                text={'게시하기'}
            />
        </Section>
    )
}

export default MeetUpWriteTemp

const dummyCategories = [
    // '밋업의 종류를 골라주세요.',
    '프로젝트',
    '스터디',
    '네트워킹',
]
const dummyJoinTypes = ['private', 'public']
const dummyMeetUpStates = ['모집예정', '모집중', '모집완료']
