import React from 'react'
import styled from 'styled-components'
import SelectContainer from '../../components/molecules/select-container'
import InputContainer from '../../components/molecules/input-container'
import FooterBtn from '../../components/atoms/footer-button'
import Label from '../../components/atoms/label'
import TextArea from '../../components/atoms/text-area'

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
    return (
        <Section>
            <form>
                <SelectContainer label={'카테고리'} options={dummyCategories} />
                <InputContainer label={'제목'} />
                <MeetUpContentContainer>
                    <Label label={'내용'} />
                    <TextArea />
                </MeetUpContentContainer>
                <InputContainer width={'20%'} label="인원수" />
                <SelectContainer
                    width={'20%'}
                    label={'참여방식'}
                    options={dummyJoinTypes}
                />
                <SelectContainer
                    width={'20%'}
                    label={'밋업상태'}
                    options={dummyMeetUpStates}
                />
            </form>
            <FooterBtn text={'게시하기'} />
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
