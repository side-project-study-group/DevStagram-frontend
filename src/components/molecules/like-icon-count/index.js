import React from 'react'
import LikeIcon from '../../atoms/buttons/like-icon'

function LikeIconCount({ count, isFilled, handleFill }) {
    return (
        <div>
            <LikeIcon isFilled={isFilled} handleFill={handleFill} />
            <span>{count}</span>
        </div>
    )
}

export default LikeIconCount
