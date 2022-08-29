import React from 'react'
import { IoHeartOutline, IoHeart } from 'react-icons/io5'

function LikeIcon({ isFilled, handleFill }) {
    return isFilled ? (
        <IoHeart color="Red" size={'24px'} onClick={handleFill} />
    ) : (
        <IoHeartOutline size={'24px'} onClick={handleFill} />
    )
}

export default LikeIcon
