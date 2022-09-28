import React from 'react'
import styled from 'styled-components'
import EditButton from '../../atoms/buttons/edit-button'
import MeetUpTitle from '../../atoms/meet-up-title'
import ProfileImg from '../../atoms/profile-img'
import MeetUpTag from '../../atoms/tags/meet-up-tag'
import TextBox from '../../atoms/texts/text-box'
import MemberCount from '../../molecules/member-count'
import TimeLine from './../../atoms/texts/time-line'

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

function MeetUpPost({ data, isOwned, handleBottomPopUp }) {
    return (
        data && (
            <Article>
                <Wrapper>
                    <Header>
                        <Container>
                            <Img src={data.isOpenYn ? Unlock : Lock} />
                            <MeetUpTag code={data?.category} />
                            <MeetUpTag code={data?.isRecruiting} />
                        </Container>
                        {isOwned && (
                            <EditButton handleClick={handleBottomPopUp} />
                        )}
                    </Header>
                    <MeetUpTitle size={'big'}>{data.title}</MeetUpTitle>
                    <TimeLine />
                    <TextBox size={'big'}>{data.contents}</TextBox>
                    <Footer>
                        <MemberCount
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
    )
}

export default MeetUpPost
