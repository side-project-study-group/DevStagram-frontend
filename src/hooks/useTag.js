import { useState } from 'react'

function useTag() {
    const [value, setValue] = useState('')
    const [tags, setTags] = useState([])

    const handleChange = (e) => {
        const reg = /\r\n|\n|\r|\s|\t/gm
        // 공백만 있을 경우 함수 종료
        if (e.target.value === ' ') return

        // 인풋에 value로 넣을 값
        setValue(e.target.value)

        // 스페이스바 등 공백 없을 경우 함수 종료
        if (!e.target.value.match(reg)) return

        //텍스트 중간에서 공백을 넣는 예외시 공백 삭제 처리
        const tag = e.target.value.replace(reg, '')

        //기존에 추가한 태그인 경우 함수 종료
        if (tags.includes(tag)) {
            setValue('')
            return
        }
        //태그에 추가
        setTags([...tags, tag])
        setValue('')
    }

    const handleClick = (e) => {
        const name = e.target.getAttribute('name')
        setTags(tags.filter((item) => item !== name))
    }

    return [value, tags, handleChange, handleClick]
}

export default useTag
