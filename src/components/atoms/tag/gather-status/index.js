import React from "react";
import styled from "styled-components";

const Tag = styled.div`
    padding: 0 10px;
    margin-right: 5px;
    font-size: 17px;
    width: fit-content;
    display: inline-block;
    background-color: #4b7fff;
    color: white;
    font-family: 'NotoSansKRBold';
    border-radius: 5px;
    border: 1px solid #414042;
`

function GatherStatusTag({title}){
    return <Tag>{title}</Tag>
}

export default GatherStatusTag