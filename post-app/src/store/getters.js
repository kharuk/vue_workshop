export default {
  posts(state) {
    return state.posts;
  },
  postById: (state) => (id) => {
    return state.posts.find((post) => post.id === Number(id));
  },
  post(state) {
    return state.post;
  },
  editablePost(state) {
    return state.editingPost;
  },
  isModalOpen(state) {
    return state.isOpen;
  },
  comments(state) {
    return state.comments;
  },
  isPostLiked: (state) => (postId) => {
    return state.isLiked[postId];
  },
  userProfile(state) {
    return state.userProfile;
  },
};
