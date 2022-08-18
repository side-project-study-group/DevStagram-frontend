import React from 'react';
import styled from 'styled-components';

const H2=styled.h2`
    width: 200px;
    height: auto;
    margin:0 auto;
    padding:5px;
    font-family: 'Noto Sans CJK KR';
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    color: rgba(65, 64, 66, 1);
    box-sizing:border-box;
    ;
`

function H2Tag({sign}){
    return (
        <H2>{sign}</H2>
    )
}

export default H2Tag;