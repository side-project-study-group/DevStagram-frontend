import React from "react";
import VerticalProfile from "../../components/molecules/vertical-profile"
import Text from "../../components/atoms/text"
import {IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";
import styled from "styled-components";
import IconCount from "../../components/molecules/Icon-count";

function TimelineDetailTemp({src, text, date, contents, replyCount, likeCount}) {

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
                <IconCount icon={<IoChatbubbleOutline />} count={replyCount} />
                <IconCount icon={<IoHeartOutline />} count={likeCount} />
            </StyledDiv>
        </StyledContainer>
    )
}

export default TimelineDetailTemp