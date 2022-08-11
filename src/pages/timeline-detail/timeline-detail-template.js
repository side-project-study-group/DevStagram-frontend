import React from "react";
import VerticalProfile from "../../components/molecules/vertical-profile"
import Text from "../../components/atoms/text"
import styled from "styled-components";
import ChatIconCount from "../../components/molecules/chat-icon-count";
import LikeIconCount from "../../components/molecules/like-icon-count";

function TimelineDetailTemp({src, text, date, contents, replyCount, isFilledInit, likeCount}) {

    const StyledContainer = styled.div`
        margin-right: 20px;
        margin-left: 20px;
        margin-top: 10px;
        padding: 5px 5px;
        border: solid 2px gray;
        border-radius: 5px;
    `

    const StyledDiv = styled.div`
        display: flex;
        justify-content: flex-end;
        align-items: center;
    `;

    return (
        <StyledContainer>
            <VerticalProfile src={src} text={text} date={date} />
            <Text value={contents} />
            <StyledDiv>
                <ChatIconCount count={replyCount} />
                <LikeIconCount isFilledInit={isFilledInit}  count={likeCount} />
            </StyledDiv>
        </StyledContainer>
    )
}

export default TimelineDetailTemp