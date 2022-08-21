import React from 'react';
import styled from 'styled-components';

const H1=styled.h1`
    width: 200px;
    height: 47px;
    margin:0 auto;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 47px;
    text-align: center;
    color : rgba(65, 65, 65, 1);
`

function H1Tag({sign}){
    return (
        <H1>{sign}</H1>
    )
}

export default H1Tag;