const mongoose = require("mongoose");
const App = require("./App")

const port = 8000
App.listen(port,(req,res)=>
{
    console.log("Server is running on port "+port);
})
mongoose.connect("mongodb://localhost:27017/TLP")
        .then((req,res) => 
        {
            console.log("MangoDb Conected");
        })
        .catch((err)=>
        {
            console.log(err);
            
        })
