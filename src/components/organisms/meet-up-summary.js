import React, { useMemo } from 'react'
import styled from 'styled-components'
import Lock from '../../assets/icons/Lock.svg'
import Unlock from '../../assets/icons/Unlock.svg'
import MemberCount from '../molecules/member-count'
import TextBox from '../atoms/texts/text-box'
import UserProfile from '../molecules/user-profile'
import { useNavigate } from 'react-router-dom'
import MeetUpTag from '../atoms/tags/meet-up-tag'
import MeetUpTitle from '../atoms/meet-up-title'

const Article = styled.article`
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    position: relative;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(65, 64, 66, 0.2);
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
const Section = styled.section`
    display: flex;
    align-items: center;
    gap: 5px;
`

const Footer = styled.footer`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`

function MeetUpSummary({ summary }) {
    const navigate = useNavigate()
    return (
        summary && (
            <Article onClick={() => navigate(`/meet-up/${summary.id}`)}>
                <Wrapper>
                    <Header>
                        <Img src={summary.isOpenYn ? Unlock : Lock} />
                        <MeetUpTag code={summary.category} />
                    </Header>
                    <Section>
                        <MeetUpTag code={summary.isRecruiting.toString()} />
                        <MeetUpTitle size={'small'}>
                            {summary.title}
                        </MeetUpTitle>
                    </Section>
                    <TextBox size={'small'}>{summary.contents}</TextBox>
                    <Footer>
                        <MemberCount
                            maxCount={summary.maxPeople}
                            joinCount={summary.memberCount}
                        />
                        <UserProfile size={'small'} id={summary.leaderId} />
                    </Footer>
                </Wrapper>
            </Article>
        )
    )
}

export default MeetUpSummary
