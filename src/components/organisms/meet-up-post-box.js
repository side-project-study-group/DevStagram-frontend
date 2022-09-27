import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MemberTag from '../molecules/member-tag'
import MeetUpTitle from '../molecules/meet-up-title'
import TextBox from '../atoms/texts/text-box'
import ProfileTag from '../molecules/profile-tag'
import Lock from '../../assets/icons/Lock.svg'
import Unlock from '../../assets/icons/Unlock.svg'
import TimeLine from '../atoms/texts/time-line'
import MeetUpTag from '../atoms/tags/meet-up-tag'
import ProfileImg from '../atoms/profile-tag/img'
import SettingIcon from '../../assets/icons/SettingIcon.svg'

const Article = styled.article`
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 100%;
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
    justify-content: space-between;
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
    padding: 0;
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

function MeetUpPostBox({ data, isOwned, handleBottomPopUp }) {
    return (
        <Article>
            <Wrapper>
                <Header>
                    <Container>
                        <Img src={data.isOpenYn ? Unlock : Lock} />
                        <MeetUpTag code={data?.category} />
                        <MeetUpTag code={data?.isRecruiting} />
                    </Container>
                    {isOwned && (
                        <EditBtn onClick={handleBottomPopUp}>
                            <Img src={SettingIcon} />
                        </EditBtn>
                    )}
                </Header>
                <MeetUpTitle title={data.title} />
                <TimeLine />
                <TextBox>{data.contents}</TextBox>
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
        </Article>
    )
}

export default MeetUpPostBox
