const userModel = require("../models/userModel");

const getAllUsers = (req, res) => {
  try {
    const users = userModel.findAll();

    const safeUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt
    }));

    return res.status(200).json({
      success: true,
      count: safeUsers.length,
      users: safeUsers
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching users",
      error: error.message
    });
  }
};

const getUserById = (req, res) => {
  try {
    const { id } = req.params;
    const user = userModel.findById(id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found with ID: " + id
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching user",
      error: error.message
    });
  }
};

module.exports = {
  getAllUsers,
  getUserById
};
