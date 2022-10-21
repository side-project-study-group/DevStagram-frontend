import React from 'react'
import styled from 'styled-components'
import FeedSummaryBox from './summary-box/feed'

const Section = styled.section`
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`

function FeedList({ data, setTarget }) {
    return (
        <Section>
            {data.map((feed, i) => {
                return (
                    <FeedSummaryBox
                        key={feed.id}
                        {...feed}
                        refState={summaries.length - 1 === i}
                        setTarget={setTarget}
                    />
                )
            })}
        </Section>
    )
}
export default FeedList
