import React from 'react'
import FeedDetailTemp from './template'

function FeedDetail() {
    const mock = {
        id: 0,
        userId: 'dayeon',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        pictureUrl: '',
        createDt: '2022-09-28 01:30:00',
        updateDt: '',
    }

    return <FeedDetailTemp {...mock} />
}

export default FeedDetail
