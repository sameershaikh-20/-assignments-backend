function validateUser(user) {

  if (!user || typeof user !== "object") {
    return {
      isValid: false,
      message: "Request body must be a valid JSON object"
    };
  }

  if (typeof user.name !== "string" || user.name.trim() === "") {
    return {
      isValid: false,
      message: "Validation Error: 'name' must be a non-empty string"
    };
  }

  if (typeof user.age !== "number" || user.age <= 18) {
    return {
      isValid: false,
      message: "Validation Error: 'age' must be a number greater than 18"
    };
  }

  if (typeof user.email !== "string" || !user.email.includes("@")) {
    return {
      isValid: false,
      message: "Validation Error: 'email' must contain '@'"
    };
  }

  return {
    isValid: true,
    message: "User validation successful"
  };
}

module.exports = validateUser;
