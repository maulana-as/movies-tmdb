import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch(url)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setData(data)
        })
        .catch(console.log)
        .finally(() => {
            setLoading(false)
        })
    }, [url]);

    return [data, loading];
}

export default useFetch;