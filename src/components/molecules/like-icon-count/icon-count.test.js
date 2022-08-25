import { render, screen } from '@testing-library/react'
import IconCount from '.'
import { IoHeartOutline, IoChatbubbleOutline } from 'react-icons/io5'

describe('Count 테스트', () => {
    it('count 정수형 값을 렌더링 해야한다.', () => {
        render(<IconCount count={3} />)
        screen.getByText('3')
    })
})

describe('Icon 테스트', () => {
    it('말풍선 아이콘이 렌더링 되어야 한다.', () => {
        render(<IconCount icon={<IoHeartOutline />} />)
    })
})
