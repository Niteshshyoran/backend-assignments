const fs = require("fs")
const path = require("path");

const operation = process.argv[2]; // First argument specifies the operation
const fileName = process.argv[3]; // Second argument specifies the file name or directory
const content = process.argv.slice(4).join(" "); // Additional arguments for content


switch (operation) {
  case "read":
    // Read the contents of a file
    if (!fileName) {
      console.log("Please provide a file name to read.");
      break;
    }
    fs.readFile(fileName, "utf8", (err, data) => {
      if (err) {
        console.error(`Error reading file: ${err.message}`);
      } else {
        console.log(`Contents of ${fileName}:`);
        console.log(data);
      }
    });
    break;

  case "create":
    // Create a new file
    if (!fileName) {
      console.log("Please provide a file name to create.");
      break;
    }
    fs.writeFile(fileName, "", (err) => {
      if (err) {
        console.error(`Error creating file: ${err.message}`);
      } else {
        console.log(`File '${fileName}' created successfully.`);
      }
    });
    break;

  case "append":
    // Append content to a file
    if (!fileName || !content) {
      console.log("Please provide a file name and content to append.");
      break;
    }
    fs.appendFile(fileName, content + "\n", (err) => {
      if (err) {
        console.error(`Error appending content: ${err.message}`);
      } else {
        console.log(`Content appended to file '${fileName}'.`);
      }
    });
    break;

  case "delete":
    // Delete a file
    if (!fileName) {
      console.log("Please provide a file name to delete.");
      break;
    }
    fs.unlink(fileName, (err) => {
      if (err) {
        console.error(`Error deleting file: ${err.message}`);
      } else {
        console.log(`File '${fileName}' deleted successfully.`);
      }
    });
    break;

  case "rename":
    // Rename a file
    const newFileName = content; // Using additional argument for the new name
    if (!fileName || !newFileName) {
      console.log("Please provide the current and new file names.");
      break;
    }
    fs.rename(fileName, newFileName, (err) => {
      if (err) {
        console.error(`Error renaming file: ${err.message}`);
      } else {
        console.log(`File '${fileName}' renamed to '${newFileName}'.`);
      }
    });
    break;

  case "list":
    // List contents of the current directory
    fs.readdir(".", (err, files) => {
      if (err) {
        console.error(`Error listing directory: ${err.message}`);
      } else {
        console.log("Directory contents:");
        files.forEach((file) => console.log(file));
      }
    });
    break;

  default:
    console.log(`Invalid operation '${operation}'.`);
}
