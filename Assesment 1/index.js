const http=require('http')

const server=http.createServer(function(req,res){
    
    res.write("<h1>HEY I AM STARTING AND CREATING THE SERVER</h1>")
    res.write("i am normal text")
    res.write(JSON.stringify({Name:"Mudasir"}))
    res.end("<h3>server is ending</h3>")
}

)
server.listen(4000,()=>{
    try{
        console.log("Server is Running on 4000");
    }
    catch(err){
        console.log(err);
    }
});