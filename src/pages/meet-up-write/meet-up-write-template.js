import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SelectContainer from '../../components/molecules/select-container'
import InputContainer from '../../components/molecules/input-container'
import FooterBtn from '../../components/atoms/buttons/footer-button'
import Label from '../../components/atoms/texts/label'
import TextArea from '../../components/atoms/inputs/text-area'
import useForm from '../../hooks/useForm'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

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
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    const uri = `"http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`

    function handleClick() {
        axios
            .post(`${uri}/api/meetup/service/create`, form, {
                headers: { Authorization: 'token' },
            })
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch(function (error) {
                alert(error)
            })
    }

    useEffect(() => {
        axios(`${uri}/api/meetup/read/getCategories`)
            .then((res) => {
                if (res.status === 200) {
                    setCategories()
                }
            })
            .catch(function (error) {
                alert(error)
            })
    }, [])

    return (
        <Section>
            <form onSubmit={handleSubmit}>
                <SelectContainer
                    name={'category'}
                    label={'카테고리'}
                    options={dummyCategories}
                    handleChange={handleChange}
                />
                <InputContainer
                    name={'title'}
                    label={'제목'}
                    handleChange={handleChange}
                />
                <MeetUpContentContainer>
                    <Label label={'내용'} />
                    <TextArea name={'contents'} handleChange={handleChange} />
                </MeetUpContentContainer>
                <InputContainer
                    width={'20%'}
                    label="인원수"
                    name={'maxPeople'}
                    handleChange={handleChange}
                />
                <SelectContainer
                    width={'20%'}
                    label={'참여방식'}
                    name={'isOpenYn'}
                    options={dummyJoinTypes}
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
const dummyJoinTypes = ['프라이빗밋업', '오픈밋업']
