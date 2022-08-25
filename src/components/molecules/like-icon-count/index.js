import React from 'react'
import LikeIcon from '../../atoms/buttons/like-icon'

function LikeIconCount({ count }) {
    return (
        <>
            <LikeIcon />
            <p>{count}</p>
        </>
    )
}

export default LikeIconCount
