import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useNavigationBar from '../hooks/useNavigationBar'
import MeetUpTag from './atoms/tags/meet-up-tag'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
`

function FilterTagList({ handleFilter }) {
    const [categories] = useNavigationBar()

    return (
        <Container>
            {categories?.map((category) => (
                <MeetUpTag
                    key={category.code}
                    code={category.code}
                    displayName={category.displayName}
                    handleClick={handleFilter}
                />
            ))}
        </Container>
    )
}

export default FilterTagList
