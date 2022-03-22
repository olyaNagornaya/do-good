import { getAllPosts } from "../actions/formActions";

export const PostsThunk = () => {
  return (dispatch) => {
    fetch("http://localhost:3001/items")
      .then((resp) => resp.json())
      .then((data) => {
        console.log('PostsThunk -->. data',data);
        dispatch(getAllPosts(data));
      });
  };
};
