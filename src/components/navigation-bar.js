import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useNavigationBar from '../hooks/useNavigationBar'
import MeetUpCategroyTag from './atoms/tags/meet-up-category/meet-up-category'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
`

function NavigationBar({ handleFilter }) {
    const [categories] = useNavigationBar()

    return (
        <Container>
            {categories?.map((category) => (
                <MeetUpCategroyTag
                    key={category.code}
                    code={category.code}
                    text={category.displayName}
                    handleClick={handleFilter}
                />
            ))}
        </Container>
    )
}

export default NavigationBar
