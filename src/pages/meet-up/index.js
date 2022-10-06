import React from 'react'
import useMeetUpList from '../../hooks/useMeetUpList'
import MeetUpMainTemp from './template'

function MeetUpMain() {
    const [summaries, filterCategory] = useMeetUpList()

    return (
        summaries && (
            <MeetUpMainTemp
                summaries={summaries}
                handleFilter={filterCategory}
            />
        )
    )
}

export default MeetUpMain
