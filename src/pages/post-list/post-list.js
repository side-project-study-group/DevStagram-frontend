import React, { useState } from 'react'
import PostListTemplate from './post-list-template'

function PostList() {
    return <PostListTemplate posts={mock} />
}

export default PostList

export const mock = [
    {
        src: 'https://fakeimg.pl/50x50/',
        text: 'Albert Flores',
        date: '2022-07-17 21:30:00',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        replyCount: 4,
        likeCount: 12,
    },
    {
        src: 'https://fakeimg.pl/50x50/',
        text: 'Albert Flores',
        date: '2022-07-17 21:30:00',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        replyCount: 4,
        likeCount: 12,
    },
    {
        src: 'https://fakeimg.pl/50x50/',
        text: 'Albert Flores',
        date: '2022-07-17 21:30:00',
        contents:
            'consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commode nulla facillsi',
        replyCount: 4,
        likeCount: 12,
    },
]
