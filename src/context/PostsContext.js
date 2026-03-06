import React, { createContext, useContext, useState, useEffect } from "react"
import { getPosts } from "../services/api"

const PostsContext = createContext()

export const PostsProvider = ({ children }) => {

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {

    setLoading(true)

    const newPosts = await getPosts(1)

    setPosts(newPosts)

    setLoading(false)
  }

  const loadMore = async () => {

    if (loading) return

    setLoading(true)

    const nextPage = page + 1
    setPage(nextPage)

    const newPosts = await getPosts(nextPage)

    setPosts(prev => [...prev, ...newPosts])

    setLoading(false)
  }

  return (
    <PostsContext.Provider
      value={{
        posts,
        loading,
        loadMore
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

export const usePosts = () => {
  return useContext(PostsContext)
}