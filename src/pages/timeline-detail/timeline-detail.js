import React from 'react'
import TimelineDetailTemp from './timeline-detail-template'

function TimeLineDetail() {
    const mock = {
        src: 'https://fakeimg.pl/50x50/',
        text: 'Albert Flores',
        date: '2022-07-17 21:30:00',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        isFilledInit: false,
        replyCount: 4,
        likeCount: 12,
    }

    return (
        <TimelineDetailTemp
            src={mock.src}
            text={mock.text}
            date={mock.date}
            contents={mock.contents}
            isFilledInit={mock.isFilledInit}
            replyCount={mock.replyCount}
            likeCount={mock.likeCount}
        />
    )
}

export default TimeLineDetail
