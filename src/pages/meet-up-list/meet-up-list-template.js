import React, { useState } from 'react'
import styled from 'styled-components'
import SearchHeader from '../../components/search-header'
import NavigationBar from '../../components/navigation-bar'
import PlusButton from '../../components/atoms/buttons/plus-button'
import CreatePopUp from '../create-pop-up/create-pop-up'
import MeetUpSummaryPostBox from '../../components/organisms/meet-up-summary-post-box'

const Section = styled.section`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    height: 100%;
    background-color: rgba(250, 250, 248, 1);
    padding: 0 15px;
    box-sizing: border-box;
`

const Container = styled.div`
    width: 100%;
    padding-bottom: 10px;
`

function MeetUpListTemp({ summaries }) {
    const [isOpenPopUp, setIsOpenPopUp] = useState(false)
    return (
        <>
            <Section>
                <SearchHeader />
                <NavigationBar />
                <Container>
                    {summaries.map((summary) => (
                        <MeetUpSummaryPostBox
                            key={summary.id}
                            summary={summary}
                        />
                    ))}
                </Container>
                <PlusButton
                    isOpenPopUp={isOpenPopUp}
                    handleClick={() => setIsOpenPopUp(!isOpenPopUp)}
                />
            </Section>
            {isOpenPopUp && <CreatePopUp />}
        </>
    )
}

export default MeetUpListTemp
