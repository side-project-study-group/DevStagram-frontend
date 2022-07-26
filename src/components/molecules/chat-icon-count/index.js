import React from "react";
import {IoChatbubbleOutline } from "react-icons/io5";

function ChatIconCount({count}){

    return (
        <>
            <IoChatbubbleOutline />
            <p>{count}</p>
        </>
    );
}

export default ChatIconCount;