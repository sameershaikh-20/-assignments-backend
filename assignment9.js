const http = require("http");
const validateUser = require("./validateUser");

const PORT = 3000;

const server = http.createServer((req, res) => {

  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const userData = JSON.parse(body);

        const result = validateUser(userData);

        if (!result.isValid) {

          res.writeHead(400, { "Content-Type": "application/json" });
          res.end(JSON.stringify({
            status: "error",
            message: result.message
          }));
          return;
        }

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          status: "success",
          message: "User payload is valid!",
          user: userData
        }));

      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          status: "error",
          message: "Invalid JSON format"
        }));
      }
    });

  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Please send a POST request with JSON body" }));
  }
});

server.listen(PORT, () => {
  console.log("Assignment 9 Server is running on http://localhost:" + PORT);
});
