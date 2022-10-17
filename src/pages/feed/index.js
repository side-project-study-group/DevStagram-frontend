import React from 'react'
import useFeedList from '../../hooks/queries/useFeedList'
import FeedMainTemplate from './template'

function FeedMain() {
    const data = useFeedList()
    return <FeedMainTemplate data={mock} />
}

export default FeedMain

let mock = [
    {
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
    },
    {
        id: '52',
        userId: 'writer',
        contents: 'OriginContents',
        heartsCount: null,
        pictureUrl: null,
        createDt: '2022-08-19T17:14:48.97',
        updateDt: null,
        _links: {
            detail: {
                href: 'http://175.45.195.94:9999/api/posts/getOneFeed?id=52',
            },
        },
    },
    {
        id: '51',
        userId: 'writer',
        contents: 'OriginContents',
        heartsCount: null,
        pictureUrl: null,
        createDt: '2022-08-19T17:04:07.613',
        updateDt: null,
        _links: {
            detail: {
                href: 'http://175.45.195.94:9999/api/posts/getOneFeed?id=51',
            },
        },
    },
    {
        id: '50',
        userId: 'writer',
        contents: 'OriginContents',
        heartsCount: null,
        pictureUrl: null,
        createDt: '2022-08-19T17:03:36.222',
        updateDt: null,
        _links: {
            detail: {
                href: 'http://175.45.195.94:9999/api/posts/getOneFeed?id=50',
            },
        },
    },
]
