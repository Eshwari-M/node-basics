
const fs = require("node:fs");

const content = "Student: Aishwarya | Marks: 88";

fs.writeFile("students.txt", content, (error) => {
    if (error) {
        console.log("Error writing file: ", error.message);
        return;
    }

    console.log("Student details saved successfully!");
});
console.log("content added!")