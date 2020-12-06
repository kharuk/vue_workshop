import * as Api from '../api';
import { router } from '../main';

export default {
  async loadPosts(ctx) {
    const list = await Api.getPosts();
    ctx.commit('setPosts', list);
  },

  async loadPostById(ctx, id) {
    const post = await Api.getPostById(id);
    ctx.commit('setPost', post);
  },

  async addPost(ctx, { title, body, imgUrl }) {
    const createdPost = await Api.addPost({ title, body, imgUrl });
    ctx.commit('addPost', createdPost);
  },

  async removePost(ctx, { id, hasRedirect }) {
    await Api.deletePost(id);
    if (hasRedirect) {
      router.go(-1);
    }
    ctx.commit('removePost', id);
  },

  async updatePost(ctx, { title, body, id, imgUrl }) {
    const updatedPost = await Api.editPost({ title, body, id, imgUrl });
    ctx.commit('updatePost', { updatedPost, id });
  },

  setEditMode(ctx, id) {
    ctx.commit('editingPost', id);
  },

  sesModalMode(ctx, isOpen) {
    ctx.commit('setIsOpen', isOpen);
  },

  async loadCommentsForPost(ctx, postId) {
    const comments = await Api.getCommentsByPostId(postId);
    ctx.commit('setComments', comments);
  },

  restPost(ctx) {
    ctx.commit('restPost');
  },

  async likePost(ctx, { id, likes }) {
    const likesCount = await Api.likePost({ id, likes });
    ctx.commit('updateLikes', { id, likesCount });
  },

  async login(ctx, form) {
    const { user } = await Api.login(form);
    ctx.dispatch('fetchUserProfile', user);
  },

  async signup(ctx, form) {
    const user = await Api.signup(form);
    ctx.dispatch('fetchUserProfile', user);
  },

  async fetchUserProfile(ctx, user) {
    const userProfile = await Api.fetchUserProfile(user);
    console.log('userProfile', userProfile);
    ctx.commit('setUserProfile', userProfile.data());
    if (router.currentRoute.path === '/login') {
      router.push('/');
    }
  },

  async logout(ctx) {
    await Api.logout();
    ctx.commit('setUserProfile', {});
    router.push('/login');
  },
};
