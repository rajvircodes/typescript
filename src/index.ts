import express from "express";
import type { Express } from "express";

const app:Express = express()

const PORT = 8080

app.listen(PORT, ()=>{
    console.log("Server is running on 8080");
    
})