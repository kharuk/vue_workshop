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
    if (state.post?.id === id) {
      state.post = updatedPost;
    }
  },

  editingPost(state, postId) {
    state.editingPost = state.posts.find((post) => post.id === postId);
  },

  setComments(state, comments) {
    state.comments = comments;
  },

  restPost(state) {
    state.comments = [];
    state.post = null;
  },

  setIsOpen(state, isOpen) {
    state.isOpen = isOpen;
  },

  updateLikes(state, { id, likesCount }) {
    state.posts = state.posts.map((post) =>
      post.id !== id ? post : { ...post, likes: likesCount }
    );
  },

  setUserProfile(state, userProfile) {
    state.userProfile = userProfile;
  },
};
