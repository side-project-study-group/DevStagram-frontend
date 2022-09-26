import React, { useState } from 'react'
import styled from 'styled-components'
import SearchHeader from '../../components/search-header'
import FilterTagList from '../../components/filter-tag-list'
import PlusButton from '../../components/atoms/buttons/plus-button'
import CreatePopUp from '../create-pop-up/create-pop-up'
import MeetUpSummaryPostBox from '../../components/organisms/meet-up-summary-post-box'

const Main = styled.main`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    height: 100%;
    background-color: rgba(250, 250, 248, 1);
    padding: 0 5px;
    box-sizing: border-box;
`
const Section = styled.section`
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
`

function MeetUpListTemp({ summaries, handleFilter }) {
    const [isOpenPopUp, setIsOpenPopUp] = useState(false)
    const isLogged = sessionStorage.getItem('token')

    return (
        <>
            <Main>
                <SearchHeader />
                <FilterTagList handleFilter={handleFilter} />
                <Section>
                    {summaries.map((summary) => (
                        <MeetUpSummaryPostBox
                            key={summary.id}
                            summary={summary}
                        />
                    ))}
                    {isLogged && (
                        <PlusButton
                            isOpenPopUp={isOpenPopUp}
                            handleClick={() => setIsOpenPopUp(!isOpenPopUp)}
                        />
                    )}
                </Section>
            </Main>
            {isOpenPopUp && <CreatePopUp />}
        </>
    )
}

export default MeetUpListTemp
