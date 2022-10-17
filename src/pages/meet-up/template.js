import React, { useState } from 'react'
import styled from 'styled-components'
import SearchBar from '../../components/search-bar'
import MeetUpFilterBar from '../../components/meet-up-filter-bar'
import PlusButton from '../../components/atoms/buttons/plus-button'
import CreatePopUp from '../create-pop-up/create-pop-up'
import MeetUpSummaryList from '../../components/organisms/meet-up-summary-list'

const Main = styled.main`
    width: 100%;
    max-width: 480px;
    margin: 0 auto;
    height: 100%;
    background-color: rgba(250, 250, 248, 1);
    padding: 0 5px;
    box-sizing: border-box;
`

function MeetUpMainTemp({ summaries, handleFilter, handleSearch }) {
    const [isOpenPopUp, setIsOpenPopUp] = useState(false)
    // const isLogged = sessionStorage.getItem('token')

    return (
        <>
            <Main>
                <SearchBar handleSearch={handleSearch} />
                <MeetUpFilterBar handleFilter={handleFilter} />
                <MeetUpSummaryList summaries={summaries} />
                <PlusButton
                    isOpenPopUp={isOpenPopUp}
                    handleClick={() => setIsOpenPopUp(!isOpenPopUp)}
                />
            </Main>
            {isOpenPopUp && <CreatePopUp />}
        </>
    )
}

export default MeetUpMainTemp
