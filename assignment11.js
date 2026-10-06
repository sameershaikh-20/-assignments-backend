const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 4000;
const FILE_PATH = path.join(__dirname, "students.json");

const server = http.createServer((req, res) => {

  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        let studentData = JSON.parse(body);

        studentData.registeredAt = new Date().toISOString();

        let studentsList = [];

        if (fs.existsSync(FILE_PATH)) {
          let fileContent = fs.readFileSync(FILE_PATH, "utf-8");
          try {
            studentsList = JSON.parse(fileContent);
          } catch (e) {
            studentsList = [];
          }
        }

        studentsList.push(studentData);

        fs.writeFileSync(FILE_PATH, JSON.stringify(studentsList, null, 2));

        console.log("Student registered:", studentData.studentName || studentData.name || "New Student");

        res.writeHead(201, { "Content-Type": "application/json" });
        res.end(JSON.stringify({
          status: "success",
          message: "Student registered successfully!",
          data: studentData
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
    res.end(JSON.stringify({
      message: "Please send a POST request to register a student."
    }));
  }
});

server.listen(PORT, () => {
  console.log("Assignment 11 Server running on http://localhost:" + PORT);
});
