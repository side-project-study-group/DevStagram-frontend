import React from 'react'
import styled from 'styled-components'
import TextBox from '../atoms/texts/text-box'
import CommentIconCount from '../molecules/comment-icon-count'
import LikeIconCount from '../molecules/like-icon-count'
import UserProfile from '../molecules/user-profile'
import useBoolean from './../../hooks/useBoolean'

const Footer = styled.footer`
    display: flex;
    justify-content: flex-end;
    gap: 5px;
`
const Comment = styled.p`
    margin: 10px 0;
    font-family: 'NotoSansKR';
    font-size: 16px;
    color: #414042;
`

function FeedPostReply() {
    const [isFilled, { handleToggle }] = useBoolean()
    return (
        <li>
            <div>
                <UserProfile size={'small'} id={'Savannah Nguyen'} />
                <Comment size={'big'}>Cute cat:)</Comment>
                <Footer>
                    <CommentIconCount />
                    <LikeIconCount
                        isFilled={isFilled}
                        handleFill={handleToggle}
                    />
                </Footer>
            </div>
        </li>
    )
}

export default FeedPostReply
