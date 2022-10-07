import React from 'react'
import FeedDetailTemp from './template'

function FeedDetail() {
    return <FeedDetailTemp {...mock} />
}

export default FeedDetail
const mock = {
    id: '53',
    userId: '62c46903aede795d338318e1',
    contents: 'test',
    heartsCount: [],
    pictureUrl: null,
    createDt: '2022-09-11T18:18:44.151',
    updateDt: '2022-09-11T18:18:44.151',
    _links: {
        detail: {
            href: 'http://175.45.195.94:9999/api/posts/getOneFeed?id=53',
        },
    },
}
