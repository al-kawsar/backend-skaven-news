const { register, login } = require('./authService.js');

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await register(name, email, password);
    res.json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await login(email, password);
    res.json({ token, user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { registerUser, loginUser };
