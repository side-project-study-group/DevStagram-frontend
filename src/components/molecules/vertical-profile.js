import React from 'react'
import CircleImage from '../atoms/circle-image.js'
import Text from '../atoms/text.js'
import DateText from '../atoms/date-text.js'
import styled from 'styled-components'

const StyledDiv = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;

function VerticalProfile({ src, text, date }) {

    return (
        <StyledDiv>
            <CircleImage src={src} />
            <Text value={text} />
            <DateText date={date} />
        </StyledDiv>
    )
}

export default VerticalProfile;