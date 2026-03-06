import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"

import { usePosts } from "../context/PostsContext"
import { useAuth } from "../context/AuthContext"
import { useTheme } from "../context/ThemeContext"

function MainScreen() {

  const { posts, loadMore } = usePosts()
  const { logout } = useAuth()
  const { theme, toggleTheme } = useTheme()

  const renderItem = ({ item }) => (
    <View style={[styles.post, { backgroundColor: theme.card }]}>
      <Text style={{ color: theme.text }}>{item.title}</Text>
    </View>
  )

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>

      <Text style={[styles.title, { color: theme.text }]}>
        Welcome User
      </Text>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.button }]}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.button }]}
        onPress={logout}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>

    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20
  },

  title: {
    fontSize: 24,
    marginBottom: 10
  },

  post: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 6
  },

  button: {
    padding: 14,
    borderRadius: 6,
    marginTop: 10
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  }

})