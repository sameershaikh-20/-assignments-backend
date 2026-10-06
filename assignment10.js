const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "rto_data.json");

function registerVehicle(studentName, collegeId, vehicleNumber, vehicleType) {

  let registrationDate = new Date().toISOString().split("T")[0];

  let newEntry = {
    studentName: studentName,
    collegeId: collegeId,
    vehicleNumber: vehicleNumber,
    vehicleType: vehicleType,
    registrationDate: registrationDate
  };

  let vehicleList = [];

  if (fs.existsSync(FILE_PATH)) {
    let fileContent = fs.readFileSync(FILE_PATH, "utf-8");
    try {
      vehicleList = JSON.parse(fileContent);
    } catch (e) {
      vehicleList = [];
    }
  }

  vehicleList.push(newEntry);

  fs.writeFileSync(FILE_PATH, JSON.stringify(vehicleList, null, 2));

  console.log("Registered: " + studentName + " | " + vehicleType + " (" + vehicleNumber + ")");
}

registerVehicle("Rahul Sharma", "COL-101", "MH-01-AB-1234", "Bike");
registerVehicle("Priya Patel", "COL-102", "MH-02-CD-5678", "Scooter");
registerVehicle("Amit Verma", "COL-103", "MH-04-EF-9012", "Car");
