import React from "react";
import VerticalProfile from "../../components/molecules/vertical-profile"
import Text from "../../components/atoms/text"
import {IoHeartOutline, IoChatbubbleOutline } from "react-icons/io5";
import styled from "styled-components";

function TimelineDetailTemp({src, text, date, contents}) {

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
        gap: 5px;
    `;

    return (
        <StyledContainer>
            <VerticalProfile src={src} text={text} date={date} />
            <Text value={contents} />
            <StyledDiv>
                <IoChatbubbleOutline />
                <IoHeartOutline />
            </StyledDiv>

        </StyledContainer>
    )
}

export default TimelineDetailTemp