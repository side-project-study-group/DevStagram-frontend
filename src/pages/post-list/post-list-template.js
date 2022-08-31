import React from 'react'
import SearchHeader from '../../components/search-header'
import Post from '../../components/organisms/post'
import styled from 'styled-components'

const PostListContainer = styled.div`
    max-width: 480px;
    margin: 0 auto;
`

function PostListTemplate({ posts }) {
    return (
        <PostListContainer>
            <SearchHeader />
            {posts.map((post, index) => {
                return (
                    <Post
                        key={index}
                        src={post.src}
                        text={post.text}
                        date={post.date}
                        contents={post.text}
                        replyCount={post.replyCount}
                        likeCount={post.likeCount}
                    />
                )
            })}
        </PostListContainer>
    )
}

export default PostListTemplate
