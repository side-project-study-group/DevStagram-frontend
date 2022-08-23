import React from 'react'
import { IoHeartOutline, IoHeart } from 'react-icons/io5'
import useFilled from '../../../../hooks/useFilled'

function LikeIcon({ isFilledInit }) {
    const [isFilled, onClick] = useFilled(isFilledInit)

    return isFilled ? (
        <IoHeart color="Red" onClick={onClick} />
    ) : (
        <IoHeartOutline onClick={onClick} />
    )
}

export default LikeIcon
