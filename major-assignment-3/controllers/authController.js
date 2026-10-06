const userModel = require("../models/userModel");

const signup = (req, res) => {
  const { name, email, password } = req.body;

  try {

    const newUser = userModel.create(name, email, password);

    return res.status(201).json({
      success: true,
      message: "User registered successfully!",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error registering user",
      error: error.message
    });
  }
};

const login = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  const user = userModel.findByEmail(email);

  if (!user || user.password !== password) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password"
    });
  }

  return res.status(200).json({
    success: true,
    message: "Login successful!",
    user: {
      id: user.id,
      name: user.name,
      email: user.email
    }
  });
};

module.exports = {
  signup,
  login
};
