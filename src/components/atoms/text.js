import React from "react";
import styled from "styled-components";

function Text({value, size}){

    const sizes = {
        large: '20px',
        medium: '16px',
        small: '12px'
    }

    const StyledP = styled.p`
        font-size: ${sizes[size]};
    `;


    return <StyledP>{value}</StyledP> ;
}

export default Text;