import React, { useEffect, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import AsyncStorage from '@react-native-async-storage/async-storage'

import { getPosts } from "../services/api"

function MainScreen({ onLogout }) {

  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {

    setLoading(true)

    const newPosts = await getPosts(page)

    setPosts(prevPosts => [...prevPosts, ...newPosts])

    setLoading(false)
  }

  const loadMore = async () => {

    const nextPage = page + 1

    setPage(nextPage)

    const newPosts = await getPosts(nextPage)

    setPosts(prevPosts => [...prevPosts, ...newPosts])
  }

  const handleLogout = async () => {
    await AsyncStorage.removeItem("isLoggedIn")
    onLogout()
  }

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome User</Text>

      <Text style={{color:"white"}}>
        Posts Loaded: {posts.length}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={loadMore}
        disabled={loading}
      >
        <Text style={styles.buttonText}>Load More</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}

export default MainScreen