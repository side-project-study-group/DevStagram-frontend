import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import MeetUpCategroyTag from './atoms/tags/meet-up-category/meet-up-category'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;
`

function NavigationBar() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        setCategories(mock)
    }, [])
    return (
        <Container>
            {categories?.map((category) => (
                <MeetUpCategroyTag
                    key={category.id}
                    text={category.displayName}
                />
            ))}
        </Container>
    )
}

export default NavigationBar

const mock = [
    { id: 0, displayName: '전체' },
    { id: 1, displayName: '프로젝트' },
    { id: 2, displayName: '스터디' },
    { id: 3, displayName: '네트워킹' },
]
