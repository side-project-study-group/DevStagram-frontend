import axios from 'axios'

function useToggleLike(handleToggle, setLikeCount) {
    const uri = `http://175.45.195.94:9999/api`
    const config = {
        headers: {
            Authorization:
                'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI2MzBmNTMwNGM2ODU3MTE5M2MxZDhiNzIiLCJleHAiOjE2NjU3MjUxODAsImlhdCI6MTY2NTU1MjM4MCwiZW1haWwiOiJndWVzdDIyMkBnbWFpbC5jb20ifQ.H_9x_tPnWAuANhdlHnrjT2cZnb77OFwckRH4M4cCokfad6evjkiY2btBaWgIqPprZ_U-9e2ZI4NP8pRuN6iOsw',
        },
    }

    const handleLike = (isFilled, postId) => {
        handleToggle(isFilled)
        setLikeCount((prevCount) => (isFilled ? prevCount - 1 : prevCount + 1))
        axios
            .post(`${uri}/api/posts/like/${postId}`, config)
            .then((res) => setLikeCount(res.data.attribute.result.heartCount))
    }

    return handleLike
}

export default useToggleLike
