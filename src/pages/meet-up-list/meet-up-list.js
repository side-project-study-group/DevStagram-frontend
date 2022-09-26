import React from 'react'
import useMeetUpList from '../../hooks/useMeetUpList'
import MeetUpListTemp from './meet-up-list-template'

function MeetUpList() {
    const [summaries, filterCategory] = useMeetUpList()

    return (
        <MeetUpListTemp summaries={summaries} handleFilter={filterCategory} />
    )
}

export default MeetUpList
