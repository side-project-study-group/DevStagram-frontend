import React, { useState } from 'react'
import SearchBar from '../../components/search-bar'
import styled from 'styled-components'
import FeedList from '../../components/organisms/feed-list'
import CreatePopUp from '../create-pop-up/create-pop-up'
import PlusButton from '../../components/atoms/buttons/plus-button'

const Main = styled.main`
    max-width: 480px;
    margin: 0 auto;
    padding: 0 5px;
    box-sizing: border-box;
    background-color: #fafaf8;
    height: 100%;
`

function FeedMainTemplate({ data }) {
    const [isOpenPopUp, setIsOpenPopUp] = useState(false)
    return (
        <Main>
            <SearchBar />
            {data && <FeedList data={data} />}
            {isOpenPopUp && <CreatePopUp />}
            <PlusButton
                isOpenPopUp={isOpenPopUp}
                handleClick={() => setIsOpenPopUp(!isOpenPopUp)}
            />
        </Main>
    )
}

export default FeedMainTemplate
