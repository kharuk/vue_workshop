export default {
  posts(state) {
    return state.posts;
  },
  /*   postById: (state) => (id) => {
    return state.posts.find((post) => post.id === Number(id));
  }, */
  post(state) {
    return state.post;
  },
  editablePost(state) {
    return state.editingPost;
  },
  comments(state) {
    return state.comments;
  },
};
