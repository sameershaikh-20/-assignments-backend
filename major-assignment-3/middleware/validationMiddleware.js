const userModel = require("../models/userModel");

const validateSignup = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required"
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Invalid email format"
    });
  }

  const existingUser = userModel.findByEmail(email);
  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "Email is already registered"
    });
  }

  if (password.length < 8) {
    return res.status(400).json({
      success: false,
      message: "Password must be at least 8 characters long"
    });
  }

  if (!/[A-Z]/.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must contain at least 1 uppercase letter"
    });
  }

  if (!/[a-z]/.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must contain at least 1 lowercase letter"
    });
  }

  if (!/[0-9]/.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must contain at least 1 digit"
    });
  }

  const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  if (!specialCharRegex.test(password)) {
    return res.status(400).json({
      success: false,
      message: "Password must contain at least 1 special character"
    });
  }

  next();
};

module.exports = {
  validateSignup
};
