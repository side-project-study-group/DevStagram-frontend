import React from 'react'
import { useParams } from 'react-router-dom'
import useMeetUpDetail from '../../hooks/useMeetUpDetail'
import MeetUpDetailTemp from './meet-up-detail-templete'

function MeetUpDetail() {
    const { id } = useParams()
    const props = useMeetUpDetail(id)

    return props && <MeetUpDetailTemp {...props} />
}
export default MeetUpDetail
