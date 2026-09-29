let express = require('express');
let app = express();
app.post("/register",(req,res)=>{
    res.send("register route called");  
});
app.get("/viewstudent",(req,res)=>{
    res.send("view student page called");
})
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})