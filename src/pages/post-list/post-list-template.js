import React from 'react'
import SearchHeader from '../../components/search-header'
import Post from '../../components/organisms/post'
import styled from 'styled-components'

const Main = styled.main`
    max-width: 480px;
    margin: 0 auto;
    padding: 0 5px;
    background-color: #fafaf8;
    height: 100%;
`
const Section = styled.section`
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`

function PostListTemplate({ posts }) {
    return (
        <Main>
            <SearchHeader />
            <Section>
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
            </Section>
        </Main>
    )
}

export default PostListTemplate
