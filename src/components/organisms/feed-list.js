import React from 'react'
import styled from 'styled-components'
import FeedPostOnly from './feed-post-only'

const Section = styled.section`
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`

function FeedList({ data }) {
    return (
        <Section>
            {data.map((feed) => {
                return <FeedPostOnly key={feed.id} {...feed} />
            })}
        </Section>
    )
}
export default FeedList
