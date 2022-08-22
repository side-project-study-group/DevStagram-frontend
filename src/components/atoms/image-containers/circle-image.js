import React from 'react'
import styled from 'styled-components'

const SImage = styled.img`
border-radius: 50%;
`

function CircleImage({src, alt}){
    return <SImage src={src} alt={alt} />
}

export default CircleImage