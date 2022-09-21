import React from 'react'
import styled from 'styled-components'
import Lock from '../../assets/icons/Lock.svg'
import Unlock from '../../assets/icons/Unlock.svg'
import axios from 'axios'
import MeetUpTitle from '../molecules/meet-up-title'
import MemberTag from '../molecules/member-tag'
import TextBox from '../atoms/texts/text-box'
import ProfileTag from '../molecules/profile-tag'
import MeetUpCategroyTag from '../atoms/tags/meet-up-category/meet-up-category'
import { useNavigate } from 'react-router-dom'

const Article = styled.article`
    width: 100%;
    margin-bottom: 20px;
    box-sizing: border-box;
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
    justify-content: space-between;
    margin-top: 10px;
`

function MeetUpSummaryPostBox({ summary }) {
    const navigate = useNavigate()

    return (
        <Article onClick={() => navigate(`/meet-up-detail/${summary.id}`)}>
            <Wrapper>
                <Header>
                    <Img src={summary?.isOpenYn ? Unlock : Lock} />
                    <MeetUpCategroyTag text={summary?.category} />
                </Header>
                {/* <EditBtn></EditBtn> */}
                <MeetUpTitle
                    isRecruiting={summary?.isRecruiting}
                    title={summary?.title}
                />
                <TextBox text={summary?.contents} />
                <Footer>
                    <MemberTag
                        maxCount={summary?.maxPeople}
                        joinCount={summary?.memberCount}
                    />
                    <ProfileTag size={'small'} id={summary?.leaderId} />
                </Footer>
            </Wrapper>
        </Article>
    )
}

export default MeetUpSummaryPostBox
