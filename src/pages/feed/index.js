import React from 'react'
import useFeedList from '../../hooks/queries/useFeedList'
import FeedMainTemplate from './template'

function FeedMain() {
    const props = useFeedList()
    return <FeedMainTemplate {...props} />
}

export default FeedMain
