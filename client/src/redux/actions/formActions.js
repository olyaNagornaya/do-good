export const getAllPosts = (allPosts) => {
  return {
     type: 'ALL POSTS',
     payload: allPosts,
  }
}

export const getNewPost = (allPost) => {
  return {
     type: 'ADD POST',
     payload: allPost,
  }
}
