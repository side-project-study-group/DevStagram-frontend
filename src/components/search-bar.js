import React from 'react'
import styled from 'styled-components'
import Search from '../assets/icons/Glass.svg'

const Section = styled.section`
    width: 100%;
    max-width: 480px;
    box-sizing: border-box;
    padding: 10px 0;
    display: flex;
    background-color: #fafaf8;
`

const Img = styled.img`
    position: absolute;
    margin-left: 10px;
    margin-top: 7px;
    width: 20px;
`

const SearchContainer = styled.input`
    width: 100%;
    padding: 0;
    height: 30px;

    border-radius: 5px;
    border: 2px solid #24231f;
    padding-left: 35px;
    font-family: 'NotoSansKR';
`

function SearchBar() {
    return (
        <Section>
            <Img src={Search} />
            <SearchContainer placeholder="Search" />
        </Section>
    )
}

export default SearchBar
