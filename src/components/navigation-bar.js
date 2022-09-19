import axios from 'axios'
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
    const [categories, setCategories] = useState([
        { code: 'ALL', displayName: '전체' },
    ])

    useEffect(() => {
        const uri = `http://default-gateway-service--87742-11669872-9594cfbe56b3.kr.lb.naverncp.com:9999`
        axios(`${uri}/api/meetup/read/getCategories`)
            .then((res) => {
                if (res.status === 200) {
                    setCategories([...categories, ...res.data.attribute.result])
                }
            })
            .catch(function (error) {
                console.log('Navigation bar error===>', error)
            })
    }, [])

    return (
        <Container>
            {categories?.map((category) => (
                <MeetUpCategroyTag
                    key={category.code}
                    code={category.code}
                    text={category.displayName}
                />
            ))}
        </Container>
    )
}

export default NavigationBar
