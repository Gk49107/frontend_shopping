const userKeyName = "jwt";

export const setToken = (value) => {
  const item = {
    value: value,
  };

  localStorage.setItem(userKeyName, JSON.stringify(item));
};

export const getToken = () => {
  const token = localStorage.getItem(userKeyName);
  if (!token) {
    return null;
  }

  const item = JSON.parse(token);

  return item.value;
};

export const deleteToken = () => {
  localStorage.removeItem(userKeyName);
};
