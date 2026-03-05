import { useState, useEffect } from "react"

export const useFetch = (apiFunction) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchData = async () => {
    try {

      const result = await apiFunction()

      setData(result)

    } catch (err) {

      setError("Something went wrong")

    } finally {

      setLoading(false)

    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading, error }

}