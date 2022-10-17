import React from 'react'
import useMeetUpList from '../../hooks/useMeetUpList'
import MeetUpMainTemp from './template'

function MeetUpMain() {
    const props = useMeetUpList()

    return <MeetUpMainTemp {...props} />
}

export default MeetUpMain
