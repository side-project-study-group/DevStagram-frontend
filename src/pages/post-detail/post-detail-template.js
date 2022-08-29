import React from 'react'
import Post from '../../components/organisms/post'
import styled from 'styled-components'

const PostDetailContainer = styled.div`
    max-width: 480px;
    margin: 0 auto;
`

function PostDetailTemp({
    src,
    text,
    date,
    contents,
    replyCount,
    isFilledInit,
    likeCount,
}) {
    return (
        <PostDetailContainer>
            <Post
                src={src}
                text={text}
                date={date}
                contents={contents}
                replyCount={replyCount}
                isFilledInit={isFilledInit}
                likeCount={likeCount}
            />
        </PostDetailContainer>
    )
}

export default PostDetailTemp
