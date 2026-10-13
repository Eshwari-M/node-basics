const fs = require("fs");
console.log("1. Start reding");
const data = fs.readFileSync("students.txt", "utf8");

console.log("2. Student list:");
console.log(data);
console.log("3. Reading completed.");
