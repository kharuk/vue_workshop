const API_URL = 'https://jsonplaceholder.typicode.com';

export const getPost = () => {
  return fetch(`${API_URL}/posts`).then((response) => response.json());
};

export const getPostById = (id) => {
  return fetch(`${API_URL}/posts/${id}`).then((response) => response.json());
};

export const addPost = ({ title, body }) => {
  return fetch(`${API_URL}/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title: title,
      body: body,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};

export const deletePost = (id) => {
  return fetch(`${API_URL}/posts/${id}`, {
    method: 'DELETE',
  });
};

export const editPost = ({ title, body, id }) => {
  return fetch(`${API_URL}/posts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};

export const getCommentsByPostId = (id) => {
  return fetch(`${API_URL}/posts/${id}/comments`).then((response) => response.json());
};
