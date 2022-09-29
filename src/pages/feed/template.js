import React from 'react'
import SearchBar from '../../components/search-bar'
import styled from 'styled-components'
import FeedList from '../../components/organisms/feed-list'

const Main = styled.main`
    max-width: 480px;
    margin: 0 auto;
    padding: 0 5px;
    background-color: #fafaf8;
    height: 100%;
`

function FeedMainTemplate({ data }) {
    return (
        <Main>
            <SearchBar />
            {data && <FeedList data={data} />}
        </Main>
    )
}

export default FeedMainTemplate
