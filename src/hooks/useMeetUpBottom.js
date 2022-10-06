import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function useMeetUpBottom(type, data, setIsOpenPopUp, status) {
    const navigate = useNavigate()

    const handleMember = () => {
        navigate('/member-management', {
            state: {
                memberId: data?.memberId,
                pendingId: data?.pendingId,
                leaderId: data?.leaderId,
                isOpenYn: data?.isOpenYn,
                status: status === 'OWNED',
            },
        })
    }
    const handleDelete = () => setIsOpenPopUp(true)
    const handleModify = () =>
        (type === 'feed' && navigate('/feed-form')) ||
        (type === 'meetUp' && navigate('/meet-up-form'))
    return { handleMember, handleDelete, handleModify }
}

export default useMeetUpBottom
