import React from 'react'
import Text from '../atoms/texts/text-box'
import styled from 'styled-components'
import ChatIconCount from '../molecules/chat-icon-count'
import LikeIconCount from '../molecules/like-icon-count'
import useBoolean from '../../hooks/useBoolean'
import ProfileTag from '../molecules/user-profile'
import DateText from '../atoms/texts/date-text'
import { useLocation, useNavigate } from 'react-router-dom'
import EditButton from '../atoms/buttons/edit-button'

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    align-items: flex-end;
`
const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`
const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`

function PostContents({
    src,
    text,
    date,
    contents,
    replyCount,
    likeCount,
    handleBottomPopUp,
}) {
    const [isFilled, fillActions] = useBoolean()
    const navigate = useNavigate()
    const { pathname } = useLocation()

    return (
        <>
            <Header>
                <Container>
                    <ProfileTag size={'big'} id={text} />
                    <DateText date={date} />
                </Container>
                <EditButton handleClick={handleBottomPopUp} />
            </Header>
            <Text size={pathname === '/feed' ? 'small' : 'big'}>
                consectetur adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla facilisi f
            </Text>
            <Footer>
                <ChatIconCount count={replyCount} />
                <LikeIconCount
                    isFilled={isFilled}
                    handleFill={fillActions.handleToggle}
                    count={likeCount}
                />
            </Footer>
        </>
    )
}

export default PostContents
