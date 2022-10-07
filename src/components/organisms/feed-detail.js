import React from 'react'
import styled from 'styled-components'
import EditButton from '../atoms/buttons/edit-button'
import DateText from '../atoms/texts/date-text'
import TextBox from '../atoms/texts/text-box'
import CommentIconCount from '../molecules/comment-icon-count'
import LikeIconCount from '../molecules/like-icon-count'
import UserProfile from '../molecules/user-profile'
import PostReplies from './feed-post-replies'
import useBoolean from '../../hooks/useBoolean'

const Article = styled.article`
    margin-bottom: 10px;
    padding: 20px 15px 10px;
    border: 1px solid rgba(65, 64, 66, 0.2);
    border-radius: 10px;
    background-color: #ffffff;
`
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
    margin-bottom: 15px;
`
const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    margin-top: 15px;
`

function FeedPost({
    id,
    userId,
    contents,
    createDt,
    updateDt,
    handleBottomPopUp,
}) {
    const [isFilled, fillActions] = useBoolean()

    return (
        <Article>
            <Header>
                <Container>
                    <UserProfile size={'big'} id={userId} />
                    <DateText date={updateDt ? updateDt : createDt} />
                </Container>
                <EditButton handleClick={handleBottomPopUp} />
            </Header>
            <TextBox size={'big'}>{contents}</TextBox>
            <Footer>
                <CommentIconCount count={5} />
                <LikeIconCount
                    isFilled={isFilled}
                    handleFill={fillActions.handleToggle}
                    count={3}
                />
            </Footer>
            <PostReplies />
        </Article>
    )
}

export default FeedPost
