import React from 'react'
import styled from 'styled-components'
import MeetUpSummaryBox from './summary-box/meet-up'

const Section = styled.section`
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`

function MeetUpSummaryList({ summaries }) {
    return (
        <Section>
            {summaries?.map((summary) => (
                <MeetUpSummaryBox key={summary.id} summary={summary} />
            ))}
        </Section>
    )
}

export default MeetUpSummaryList
