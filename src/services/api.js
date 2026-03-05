export const getPosts = async (page) => {

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  )

  const data = await response.json()

  return data
}