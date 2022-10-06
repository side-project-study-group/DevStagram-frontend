import React from 'react'
import styled from 'styled-components'
import Crown from '../../assets/icons/Crown.svg'
import Test from '../../assets/imgs/test33.png'

const CrwonIcon = styled.img`
    width: ${(props) => (props.size === 'small' ? '15px' : '34px')};
`
const LeaderProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${(props) => (props.size === 'small' ? '2px' : '4px')};
    margin-right: 5px;
`
const Circle = styled.div`
    width: ${(props) => (props.size === 'small' ? '26px' : '60px')};
    height: ${(props) => (props.size === 'small' ? '26px' : '60px')};
    img {
        width: 100%;
        border-radius: 50%;
    }
`

function LeaderProfileImg({ size }) {
    return (
        <LeaderProfileContainer size={size}>
            <CrwonIcon size={size} src={Crown} />
            <Circle size={size}>
                <img src={Test} />
            </Circle>
        </LeaderProfileContainer>
    )
}

export default LeaderProfileImg
