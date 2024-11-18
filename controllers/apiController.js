let users = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Sam Johnson" },
];

export const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

export const getUserById = (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Nincs ilyen user" });
  }
};

export const createUser = (req, res) => {
  const newUser = { id: (users.length + 1).toString(), name: req.body.name };
  users.push(newUser);
  res.status(201).json(newUser);
};

export const updateUser = (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  if (user) {
    user.name = req.body.name;
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Nincs ilyen user" });
  }
};

export const deleteUser = (req, res) => {
  const userIndex = users.findIndex((u) => u.id === req.params.id);
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: "Nincs ilyen user" });
  }
};
