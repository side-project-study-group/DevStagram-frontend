import React from 'react'
import Text from '../../components/atoms/texts/text'
import styled from 'styled-components'
import ChatIconCount from '../../components/molecules/chat-icon-count'
import LikeIconCount from '../../components/molecules/like-icon-count'
import useBoolean from '../../hooks/useBoolean'
import ProfileImg from '../atoms/profile-tag/img'
import ProfileTag from '../molecules/profile-tag'
import TimeLine from '../atoms/texts/time-line'
import DateText from '../atoms/texts/date-text'
import { useNavigate } from 'react-router-dom'

const Article = styled.article`
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid rgba(65, 64, 66, 0.2);
    border-radius: 10px;
    background-color: #ffffff;
    /* box-shadow: 1px 1px 3px rgba(65, 64, 66, 0.2);  */
`
const Header = styled.header`
    display: flex;
    gap: 8px;
`
const IconContainer = styled.div`
    display: flex;
    margin-right: 10px;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`

function Post({ src, text, date, contents, replyCount, likeCount }) {
    const [isFilled, fillActions] = useBoolean()
    const navigate = useNavigate()

    return (
        <Article onClick={() => navigate('/post-detail')}>
            <Header>
                <ProfileTag size={'small'} id={text} />
                <DateText date={date} />
            </Header>
            <Text size={'small'}>
                consectetur adipiscing elit duis tristique sollicitudin nibh sit
                amet commodo nulla facilisi f
            </Text>
            <IconContainer>
                <ChatIconCount count={replyCount} />
                <LikeIconCount
                    isFilled={isFilled}
                    handleFill={fillActions.handleToggle}
                    count={likeCount}
                />
            </IconContainer>
        </Article>
    )
}

export default Post
