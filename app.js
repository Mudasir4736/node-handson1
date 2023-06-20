var http=require('http')

function requestListner(req,res){
// console.log(req.method,req.headers);
const url=req.url
if(url==='/message'){
    fs.writeFileSync('message.text',"DUMMY TEXT")
    console.log("hello");
}

if(url==='/'){
    res.write("<html>")
    res.write("<head> </head>")
    res.write("<body><h1>My name is Mudasir</h1></body>")


    res.write("</html>")
    return res.end()



}
if(url==='/form'){
    res.write("<html>")
    res.write("<head> </head>")
    res.write("<body><input placeholder'Enter Name'/></body>")


    res.write("</html>")
    return res.end()



}
res.write("default logic")
res.end()
}


const server=http.createServer(requestListner)

server.listen(3000)