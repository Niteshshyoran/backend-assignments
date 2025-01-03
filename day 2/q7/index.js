const fs = require("fs");
const crypto = require("crypto");
const os = require("os");



// const { v4: uuidv4 } = require("uuid");

// const args = process.argv.slice(2);
// const command = args[0];

// if (command === "encrypt") {
//   // Task 1: Encryption and UUID
//   const key = crypto.randomBytes(32);
//   const iv = crypto.randomBytes(16);
//   const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);
//   const data = "Hello, Good Morning";
//   let encrypted = cipher.update(data, "utf8", "hex");
//   encrypted += cipher.final("hex");
//   console.log("Encrypted String:", encrypted);
//   console.log("Random UUID:", uuidv4());
// } else if (command === "compare") {
//   // Task 2: Stream vs File System Read
//   const fileName = args[1] || "largefile.txt";

//   console.time("Stream Read");
//   const stream = fs.createReadStream(fileName);
//   stream.on("end", () => {
//     console.timeEnd("Stream Read");

//     console.time("FS Read");
//     fs.readFile(fileName, (err, data) => {
//       if (err) throw err;
//       console.timeEnd("FS Read");
//     });
//   });
// } else if (command === "system") {
//   // Task 3: System Details
//   console.log("Platform:", os.platform());
//   console.log("Architecture:", os.arch());
//   console.log("Uptime:", os.uptime());
//   console.log("Total Memory:", os.totalmem());
//   console.log("Free Memory:", os.freemem());
//   console.log("CPU Info:", os.cpus());
//   console.log("Hostname:", os.hostname());
// } else {
//   console.log("Invalid Command. Use 'encrypt', 'compare', or 'system'.");
// }
