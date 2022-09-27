import { useEffect, useState } from 'react'

function useMeetUpTag(code, displayName) {
    const [bgColor, setBgColor] = useState('')
    const [text, setText] = useState('')

    function getBgColor(arg) {
        if (arg === 'ALL') {
            setBgColor('#F0645F')
            return '전체'
        } else if (arg === 'STUDY') {
            setBgColor('#28AF73')
            return '스터디'
        } else if (arg === 'NETWORK') {
            setBgColor('#A06EEB')
            return '네트워킹'
        } else if (arg === 'PROJECT') {
            setBgColor('#FA9637')
            return '프로젝트'
        } else if (arg === 'false') {
            setBgColor('#D9D9D9')
            return '마감'
        } else {
            setBgColor('#4B64E6')
            return '모집중'
        }
    }

    useEffect(() => {
        if (code) {
            getBgColor(code)
            if (displayName === '') {
                let txt = getBgColor(code)
                setText(txt)
            } else {
                setText(displayName)
            }
        }
    }, [code, displayName])

    return [bgColor, text]
}

export default useMeetUpTag
