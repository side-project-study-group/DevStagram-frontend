import React from 'react'
import VerticalProfile from '../../components/molecules/vertical-profile'
import Text from '../../components/atoms/texts/text'
import styled from 'styled-components'
import ChatIconCount from '../../components/molecules/chat-icon-count'
import LikeIconCount from '../../components/molecules/like-icon-count'
import useBoolean from '../../hooks/useBoolean'

const PostContainer = styled.div`
    margin-right: 5px;
    margin-left: 5px;
    margin-top: 10px;
    padding: 5px 5px;
    border: solid 2px gray;
    border-radius: 5px;
`

const IconContainer = styled.div`
    display: flex;
    margin-right: 10px;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
`

function Post({ src, text, date, contents, replyCount, likeCount }) {
    const [isFilled, fillActions] = useBoolean(false)

    return (
        <PostContainer>
            <VerticalProfile src={src} text={text} date={date} />
            <Text value={contents} size={'small'} />
            <IconContainer>
                <ChatIconCount count={replyCount} />
                <LikeIconCount
                    isFilled={isFilled}
                    handleFill={fillActions.handleToggle}
                    count={likeCount}
                />
            </IconContainer>
        </PostContainer>
    )
}

export default Post
