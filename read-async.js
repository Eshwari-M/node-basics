
const fs = require("node:fs");

console.log("1. Start reading");

fs.readFile("students.txt", "utf8", (error, data) => {
    if (error) {
        console.log("Unable to read the file.");
        return;
    }

    console.log("2. Students list:");
    console.log(data);
});

console.log("3. Continue with another task parallelly.");
