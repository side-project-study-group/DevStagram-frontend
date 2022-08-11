import React from "react";
import LikeIcon from '../../atoms/like-icon'

function LikeIconCount({count}){

    return (
        <>
            <LikeIcon />
            <p>{count}</p>
        </>
    );
}

export default LikeIconCount;