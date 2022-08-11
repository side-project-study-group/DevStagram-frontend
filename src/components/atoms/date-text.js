import React from "react"
import styled from "styled-components";
import dateCalculater from "../../utils/dateCalculater";

function DateText({ date, size }) {

    const sizes = {
        large: '20px',
        medium: '16px',
        small: '12px'
    }

    const StyledP = styled.p`
        font-size: ${sizes[size]};
        color: #808080;
    `;

    return <StyledP>{dateCalculater(date)}</StyledP>
}

export default DateText