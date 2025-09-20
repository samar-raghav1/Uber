const http=require("http");
const app=require("./app");
const connectDB=require("./lib/db")
const port=process.env.PORT || 8000;
const server=http.createServer(app);

connectDB();
server.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
})





