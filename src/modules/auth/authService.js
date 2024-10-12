const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('./userModel.js');

const register = async (name, email, password) => {
  const user = await findUserByEmail(email);
  if (user) throw new Error('User already exists');
  
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const newUser = await createUser(name, email, passwordHash);
  return newUser;
};

const login = async (email, password) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password');

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { token, user };
};

module.exports = { register, login };
