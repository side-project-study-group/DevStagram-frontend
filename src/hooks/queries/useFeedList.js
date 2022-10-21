import axios from 'axios'
import { useEffect, useState } from 'react'
import useSearch from '../useSearch'

function useFeedList() {
    const [data, setData] = useState(mock)
    const [feeds, setFeeds] = useState(data)
    const { handleKeyword, patterns, curKeyword, highlightValue } = useSearch()

    const uri = `http://175.45.195.94:9999/api`
    const config = {
        headers: {
            Authorization:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjU3MjUxODAsImlhdCI6MTY2NTU1MjM4MCwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.H_9x_tPnWAuANhdlHnrjT2cZnb77OFwckRH4M4cCokfad6evjkiY2btBaWgIqPprZ_U-9e2ZI4NP8pRuN6iOsw',
        },
    }

    useEffect(() => {
        const { curPattern, prevPattern } = patterns
        let idArr = []
        let curData = data
            .filter(({ contents }) => curPattern?.test(contents))
            .map((el) => {
                idArr.push(el.id)
                el.distance = 0
                el.contents = highlightValue(el.contents, curPattern, el)
                return el
            })
        let prevData = data.filter(({ contents }) => prevPattern.test(contents))
        prevData =
            prevData.length < data.length
                ? prevData
                      .filter(({ id }) => !idArr.includes(id))
                      .map((el) => {
                          el.distance = 0
                          el.contents = highlightValue(
                              el.contents,
                              prevPattern,
                              el
                          )
                          return el
                      })
                : []

        setTimeout(() => {
            const allData = [...curData, ...prevData]
            const sortData = allData.sort((a, b) => a.distance - b.distance)
            setFeeds(sortData)
        })
    }, [patterns])

    useEffect(() => {
        axios(`${uri}/posts/timeline?page=0&size=4`, config)
            .then((res) => setData(res.data._embedded.postsList))
            .catch(function (error) {
                console.log('post-list======>', error)
            })
    }, [])
    return { feeds, handleKeyword, curKeyword }
}

export default useFeedList

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