const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
    res.setHeader("Content-Type" , "text/html");

    if(req.url == "/"){
        res.writeHead(200);
        res.end("Welcome to Home Page");
    }else if (req.url === "/aboutus"){
        res.writeHead(200);
        res.end("<h3>Welcome to About Page</h3>");
    }else if (req.url === "/contactus"){
        res.writeHead(200);
        res.end(
            '<a href ="https://www.masaischool.com" target="_blank">Contact us at www.masaischool.com</a>' //blank is used to dont open new page
        );
    }else if (req.url === "/index"){
        fs.readFile("index.js","utf8",(err, data) =>{
            if (err){
                res.writeHead(500);
                res.end("Error reading index.js file");
            }else{
                res.writeHead(200);
                res.end(data);
            }
        });
    }else{
        res.writeHead(404);
        res.end("404 Not Found")
    }
});


server.listen(8080,() =>{
    console.log("Server is running on http://localhost:8080");
});