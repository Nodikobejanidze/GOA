const http = require("http");
// Hyper Text Transfer Protocol
// 
// request --- როცა მომხარებელი უგზავნის ინფორმაციას სერვერ 
// respond --- როცა server უგავნის მომხარებს პაუხს
//                            request , respond
// createSever --- ქნის სერვერს
const server = http.createServer((req, res) => {
    // req.url  ---- link ჩენი ვებსაიტის
    if(req.url === "/"){
        res.end("hello Nodiko")
    }
    if(req.url === "/lomi"){
        res.end("<h1>This is about Nodiko bezhanidze</h1>")
    }
})
const localhost = 3000

console.log(`server listen: http://localhost:${localhost}`)
server.listen(localhost)