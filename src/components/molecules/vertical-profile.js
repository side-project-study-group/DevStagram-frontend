import React from 'react'
import CircleImage from '../atoms/circle-image.js'
import Text from '../atoms/text.js'
import DateText from '../atoms/date-text.js'
import styled from 'styled-components'

function VerticalProfile({ src, text, date }) {

    const StyledDiv = styled.div`
        display: flex;
        align-items: center;
        gap: 10px;
    `;

    return (
        <StyledDiv>
            <CircleImage src={src} />
            <Text value={text} size={"large"} />
            <DateText date={date} size={"small"} />
        </StyledDiv>
    )
}

export default VerticalProfile;