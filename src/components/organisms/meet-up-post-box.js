import React from 'react'
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

const EditBtn = styled.div`
    position: absolute;
    right: 10px;
    .edit_icon {
        width: 25px;
        height: 25px;
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

function MeetUpPostBox({ data }) {
    return (
        <Section>
            <Wrapper>
                <Header>
                    <Img src={data.isOpenYn ? Unlock : Lock} />
                    <MeetUpCategoryTag text={data.category} />
                </Header>
                <Container>
                    <ProfileTag id={data.leaderId} size={'big'} />
                    <TimeLine />
                </Container>
                <MeetUpTitle
                    isRecruiting={data.isRecruiting}
                    title={data.title}
                />
                <TextBox text={data.contetns} />
                <Footer>
                    <MemberTag
                        maxCount={data.maxPeople}
                        joinCount={data.memberId.length}
                    />
                    {data.memberId.map((id) => (
                        <ProfileImg key={id} size="small" />
                    ))}
                </Footer>
            </Wrapper>
        </Section>
    )
}

export default MeetUpPostBox
