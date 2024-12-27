const http = require("http");
const fs = require("fs");


const server = http.createServer((req, res) => {
  if (req.url === "/signup" && req.method === "GET") {
    // Render signup form
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
      <html>
        <body>
          <form action="/signup" method="POST">
            <label>Username: <input type="text" name="username" required /></label><br>
            <label>Password: <input type="password" name="password" required /></label><br>
            <button type="submit">Signup</button>
          </form>
        </body>
      </html>
    `);
  } else if (req.url === "/signup" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => {
      body += chunk.toString();
    });
    req.on("end", () =>{
      const formData = new URLSearchParams(body); //geting data from body
      const username = formData.get("username");
      const password = formData.get("password");

      const userEntry = `Username: ${username}, Password: ${password}\n`
      fs.appendFile("user.txt", userEntry, (err)=>{
        if (err){
          res.writeHead(500, {"Content-Type":"text/plain"});
          res.end("Error saving user data");
        }else{
          res.writeHead(200, {"Content-Type": "text/plain"});
          res.end("Thank you for signup...");
        }
      });
    });
  }else if (req.url === "/allusers" && req.method === "GET"){
    fs.readFile("user.txt", "utf8", (err,data)=>{
      if (err){
        res.writeHead(500,{"Content-Type": "text/plain"});
        res.end("Error reading user data");
      }else{
        const user = data
        .split("\n")
        .filter((line)=>line)
        .map((line)=> line.replace(/, password: .*/,"")) //hide password or replace
        .join("<br/>")
        res.writeHead(200, {"Content-Type":"text/html"})
        res.end(`<html><body><h1>All Users</h1><p>${user}</p></body></html>`)
      }
    });
  }else{
    res.writeHead(404, {"Content-Type":"text/plain"});
      res.end("404 Not Found");
  }
});

server.listen(8080, () => {
    console.log(`Server running on http://localhost:8080`);
  });