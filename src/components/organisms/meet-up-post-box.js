import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MemberTag from '../molecules/member-tag'
import MeetUpTitle from '../molecules/meet-up-title'
import TextBox from '../atoms/texts/text-box'
import ProfileTag from '../molecules/profile-tag'
import Lock from '../../assets/icons/Lock.svg'
import Unlock from '../../assets/icons/Unlock.svg'
import TimeLine from '../atoms/texts/time-line'
import MeetUpCategoryTag from '../atoms/tags/meet-up-category/meet-up-category'
import ProfileImg from '../atoms/profile-images/meet-up/meet-up-profile-img'
import SettingIcon from '../../assets/icons/SettingIcon.svg'
const Section = styled.div`
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    border: 2px solid #24231f;
    border-radius: 10px;
    max-width: 480px;
    padding: 10px;
`

const Header = styled.header`
    display: flex;
    align-items: center;
`

const Img = styled.img`
    width: 18px;
    margin-right: 10px;
`

const Wrapper = styled.div`
    width: 100%;
`

const EditBtn = styled.button`
    background-color: transparent;
    border: none;
    position: absolute;
    right: 0px;
    img {
        width: 25px;
        height: 20px;
        margin: 0;
    }
`

const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin-top: 10px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
`

function MeetUpPostBox({ data, handleSetting }) {
    const [category, setCategory] = useState('')

    useEffect(() => {
        if (data) {
            switch (data.category) {
                case 'ALL':
                    setCategory('전체')
                case 'NETWORK':
                    setCategory('네트워킹')
                case 'PROJECT':
                    setCategory('프로젝트')
                case 'STUDY':
                    setCategory('스터디')
            }
        }
    }, [data])

    return (
        <Section>
            <Wrapper>
                <Header>
                    <Img src={data.isOpenYn ? Unlock : Lock} />
                    <MeetUpCategoryTag code={data?.category} text={category} />
                    <EditBtn onClick={handleSetting}>
                        <Img src={SettingIcon} />
                    </EditBtn>
                </Header>
                <Container>
                    <ProfileTag id={data.leaderId} size={'big'} />
                    <TimeLine />
                </Container>
                <MeetUpTitle
                    isRecruiting={data.isRecruiting}
                    title={data.title}
                />
                <TextBox text={data.contents} />
                <Footer>
                    <MemberTag
                        maxCount={data.maxPeople}
                        joinCount={data?.memberId?.length}
                    />
                    {data?.memberId?.map((id) => (
                        <ProfileImg key={id} size="small" />
                    ))}
                </Footer>
            </Wrapper>
        </Section>
    )
}

export default MeetUpPostBox
