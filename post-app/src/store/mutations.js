export default {
  setPosts(state, list) {
    state.posts = list;
  },

  setPost(state, post) {
    state.post = post;
  },

  addPost(state, createdPost) {
    state.posts = [createdPost, ...state.posts];
  },

  removePost(state, postId) {
    state.posts = state.posts.filter(({ id }) => id !== postId);
  },

  updatePost(state, { updatedPost, id }) {
    state.posts = state.posts.map((post) => (post.id !== id ? post : updatedPost));
  },

  editingPost(state, postId) {
    state.editingPost = postId;
  },

  setComments(state, comments) {
    state.comments = comments;
  },

  restPost(state) {
    state.comments = [];
    state.post = null;
  },
};
