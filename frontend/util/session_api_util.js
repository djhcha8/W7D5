export const signup = (username, password) => {
  return $.ajax({
    url: 'api/users',
    method: 'post',
    data: {user: {username: username, password: password}}
  });
};

export const login = (username, password) => {
  return $.ajax({
    url: 'api/session',
    method: 'post',
    data: {user: {username: username, password: password}}
  });
};

export const logout = () => {
  return $.ajax({
    url: 'api/session/:id',
    method: 'delete'
  });
};
