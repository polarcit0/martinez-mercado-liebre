const path = require("path")

const express = require("express")
const app = express()

const PORT=3001; 

app.use(express.static(path.join(__dirname,"../public")))

app.listen(PORT, () => { 
    console.log(`Se prendio en el puerto ${PORT}`)
})

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"views/home.html"))
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"views/register.html"));
  });
  
  app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"views/login.html"));
  });

