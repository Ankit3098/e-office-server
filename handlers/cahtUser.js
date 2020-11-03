const users = [];

const addUser = ({ id, name, group }) => {
  name = name.trim().toLowerCase();
  group = group.trim().toLowerCase();

  const existingUser = users.find(
    user => user.group === group && user.name === name
  );
  if (existingUser) {
    return {
      error: "User name is taken."
    };
  }

  const user = { id, name, group };
  users.push(user);
  return { user };
};

const removeUser = id => {
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = id => users.find(user => user.id === id);

const getUsersInGroup = group => users.filter(user => user.group === group);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInGroup
};
