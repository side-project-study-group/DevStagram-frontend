import React from 'react'
import styled from 'styled-components'
import FeedReply from './feed-reply'

const Ul = styled.ul`
    margin: 5px 0 0 0;
    padding: 5px 0 5px 0;
    list-style: none;
`

function FeedPostReplies() {
    return (
        <Ul>
            <FeedReply />
            <FeedReply />
            <FeedReply />
            <FeedReply />
        </Ul>
    )
}

export default FeedPostReplies
