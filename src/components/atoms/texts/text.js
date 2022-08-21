import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
    font-size: 20px;
`;

function Text({value}){
    return <StyledP>{value}</StyledP> ;
}

export default Text;