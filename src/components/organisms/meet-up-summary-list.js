import React from 'react'
import styled from 'styled-components'
import MeetUpSummaryBox from './summary-box/meet-up'

const Section = styled.section`
    width: 100%;
    padding: 0 10px 20px 10px;
    box-sizing: border-box;
`

function MeetUpSummaryList({ summaries, setTarget }) {
    return (
        <Section>
            {summaries?.map((summary, i) => (
                <MeetUpSummaryBox
                    key={summary.id}
                    summary={summary}
                    refState={summaries.length - 1 === i}
                    setTarget={setTarget}
                />
            ))}
        </Section>
    )
}

export default MeetUpSummaryList
