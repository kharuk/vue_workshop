const API_URL = 'https://jsonplaceholder.typicode.com';
export const getAll = () => {
  return fetch(`${API_URL}/todos`).then((response) => response.json());
};

export const addToDo = (task) => {
  return fetch(`${API_URL}/todos`, {
    method: 'POST',
    body: JSON.stringify({
      title: task,
      completed: false,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};

export const deleteToDo = (taskId) => {
  return fetch(`${API_URL}/todos/${taskId}`, {
    method: 'DELETE',
  });
};

export const editToDo = (newToDo, id) => {
  return fetch(`${API_URL}/todos/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: newToDo,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
};
