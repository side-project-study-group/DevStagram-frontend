import React from 'react'
import styled from 'styled-components'

const LabelTag = styled.label`
    margin-bottom: 5px;
    color: rgba(65, 64, 66, 1);
    font-family: 'NotoSansKRBold';
    line-height: 30px;
`

function Label({ label }) {
    return <LabelTag>{label}</LabelTag>
}

export default Label
