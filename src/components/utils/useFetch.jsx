import { useState, useEffect } from 'react'

const useFetch = (url, item) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortCont = new AbortController()
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw new Error('could not fetc the data for that resource.')
          }
          return res.json()
        })
        .then((data) => {
          setData(data)
          setIsPending(false)
          setError(null)
        })
        .catch((err) => {
          if (err.name === 'AbortError') {
            console.log('Request Cancelled.')
          } else {
            setIsPending(false)
            setError(err.message)
          }
        })
    }, 1000)
    return () => abortCont.abort()
  }, [url, item])

  return { data, isPending, error }
}

export default useFetch
