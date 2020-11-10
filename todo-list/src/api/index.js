const API_URL = 'https://jsonplaceholder.typicode.com';
export const getAll = () => {
  return fetch(`${API_URL}/todos`).then((response) => response.json());
};
// const getById = (id = `${API_URL}/todos/${id}`);
