
const fs = require("node:fs");

fs.appendFile("students.txt", "\nStudent: Rahul\tMarks:92", (error) => {
    if (error) {
        console.log("Error appending data:", error.message);
        return;
    }

    console.log("New student added successfully!!");
});
