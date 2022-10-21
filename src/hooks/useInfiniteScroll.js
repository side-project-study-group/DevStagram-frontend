import { useCallback, useEffect, useState } from 'react'

function useInfiniteScroll(category) {
    const [page, setPage] = useState(0)
    const [target, setTarget] = useState(null)

    const handleIntersect = useCallback(([entry]) => {
        if (entry.isIntersecting) {
            setPage(page + 1)
        }
    }, [])

    useEffect(() => {
        setPage(0)
    }, [category])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.7,
        }
        const observer = new IntersectionObserver(handleIntersect, options)
        target && observer.observe(target)
    }, [handleIntersect, target])

    return { page, setTarget }
}

export default useInfiniteScroll
