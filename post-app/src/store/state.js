import { filterOptions } from '../constants/filterOptions';
export default {
  posts: [],
  post: null,
  comments: [],
  editingPost: null,
  isOpen: false,
  userProfile: null,
  isLiked: {},
  loginError: false,
  filter: filterOptions.ALL,
};
