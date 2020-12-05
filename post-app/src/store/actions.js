import * as Api from '../api';

export default {
  async loadPosts(ctx) {
    const list = await Api.getPosts();
    ctx.commit('setPosts', list);
  },

  async loadPostById(ctx, id) {
    const post = await Api.getPostById(id);
    ctx.commit('setPost', post);
  },

  async addPost(ctx, { title, body }) {
    const createdPost = await Api.addPost({ title, body });
    ctx.commit('addPost', createdPost);
  },

  async removePost(ctx, id) {
    await Api.removePost(id);
    ctx.commit('removePost', id);
  },

  async updatePost(ctx, { title, body, id }) {
    const updatedPost = await Api.editPost({ title, body, id });
    ctx.commit('updatePost', { updatedPost, id });
  },

  setEditMode(ctx, id) {
    ctx.commit('editingPost', id);
  },

  async loadCommentsForPost(ctx, postId) {
    const comments = await Api.getCommentsByPostId(postId);
    ctx.commit('setComments', comments);
  },

  restPost(ctx) {
    ctx.commit('restPost');
  },
};
