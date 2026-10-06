const express = require("express");

const loggerMiddleware = require("./middleware/loggerMiddleware");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(loggerMiddleware);

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to User Registration & Authentication API",
    endpoints: {
      signup: "POST /api/auth/signup",
      login: "POST /api/auth/login",
      getAllUsers: "GET /api/users",
      getUserById: "GET /api/users/:id"
    }
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found"
  });
});

app.listen(PORT, () => {
  console.log("==================================================");
  console.log(" Major Assignment 3 - Auth Server running on port " + PORT);
  console.log(" URL: http://localhost:" + PORT);
  console.log("==================================================");
});
