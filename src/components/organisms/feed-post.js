import React from 'react'
import styled from 'styled-components'
import PostContents from './post-contents'
import PostReplies from './post-replies'

const Article = styled.article`
    margin-bottom: 10px;
    padding: 20px 15px 10px;
    border: 1px solid rgba(65, 64, 66, 0.2);
    border-radius: 10px;
    background-color: #ffffff;
`

function FeedPost() {
    return (
        <Article>
            <PostContents />
            <PostReplies />
        </Article>
    )
}

export default FeedPost
