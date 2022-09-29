import React, { useState } from 'react'
import styled from 'styled-components'
import BottomPopUp from '../../components/organisms/modal/bottom-pop-up'
import FeedPost from '../../components/organisms/feed-post'
import PopUp from '../../components/organisms/modal/pop-up'

const Main = styled.main`
    width: 100%;
    height: 100%;
    background-color: rgba(250, 250, 248, 1);
    max-width: 480px;
    margin: 0 auto;
    padding: 30px 15px 0 15px;
    box-sizing: border-box;
`

function FeedDetailTemp(mock) {
    const [isOpenBottomPopUp, setIsOpenBottomPopUp] = useState(false)
    const handleBottomPopUp = () => setIsOpenBottomPopUp(!isOpenBottomPopUp)

    return (
        <Main>
            <FeedPost {...mock} handleBottomPopUp={handleBottomPopUp} />
            <BottomPopUp type={'post'} isOpen={isOpenBottomPopUp} />
            {/* <PopUp /> */}
        </Main>
    )
}

export default FeedDetailTemp
