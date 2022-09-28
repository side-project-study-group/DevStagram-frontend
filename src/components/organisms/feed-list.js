import React from 'react'
import styled from 'styled-components'
import FeedPostOnly from './feed-post-only'
import PostContents from './post-contents'

const Section = styled.section`
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`

function FeedList({ data }) {
    return (
        data && (
            <Section>
                {data.map((post) => {
                    return <FeedPostOnly key={post.id} data={post} />
                })}
            </Section>
        )
    )
}
export default FeedList
