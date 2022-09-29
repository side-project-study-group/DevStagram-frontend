import React from 'react'
import styled from 'styled-components'
import FeedPostReply from './feed-post-reply'

const Ul = styled.ul`
    border-top: 1px solid rgba(65, 64, 66, 0.2);
    margin: 20px 0 0 0;
    padding: 10px 0 5px 0;
    list-style: none;
`

function FeedPostReplies() {
    return (
        <Ul>
            <FeedPostReply />
        </Ul>
    )
}

export default FeedPostReplies
