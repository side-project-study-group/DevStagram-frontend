import React from 'react'
import useMeetUpDetailQuery from '../../hooks/queries/useMeetUpDetailQuery'
import MeetUpDetailTemp from './meet-up-detail-templete'

function MeetUpDetail() {
    const props = useMeetUpDetailQuery()

    return <MeetUpDetailTemp {...props} />
}
export default MeetUpDetail
