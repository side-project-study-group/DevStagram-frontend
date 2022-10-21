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

function SearchBar({ handleKeyword, curKeyword }) {
    return (
        <Section>
            <Img src={Search} />
            <SearchContainer
                placeholder="Search"
                value={curKeyword}
                onChange={handleKeyword}
            />
        </Section>
    )
}

export default SearchBar

const mock = [
    { id: 0, contents: '간단한 개발 관련 커피챗 해요' },
    { id: 1, contents: '오늘 저녁 서울역에서 오후 7시에 커피마실분' },
    {
        id: 2,
        contents:
            '2주동안 온라인으로 이펙티브 코틀린 완독 스터디 하실분 구합니다.',
    },
    { id: 3, contents: '오늘 저녁 정자역에서 오후 7시에 커피마실분 ' },
]
