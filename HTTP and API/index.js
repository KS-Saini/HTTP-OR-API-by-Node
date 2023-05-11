const http = require("http");
const fs = require("fs");
const { parse } = require("path");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("Hi from the home side");
    } else if (req.url == "/about") {
        res.end('hi from the about side');
    } else if (req.url == "/contact") {
        res.end("hi form the contact side");
    } else if (req.url == "/API") {
        fs.readFile("userapi.json", "utf-8", (err, data) => {
            res.end(data);
            // const objData = JSON.parse(data); //josn converting into the object data but some err have!
            // res.end(objData[0].slug);
        })
    } else {
        res.writeHead(404, { "contant-type": "text / html" });
        res.end("<h2> 404 err. that page doesn't exist </h2>")
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("the server listening on port No. 8000");
});