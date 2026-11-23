// const express = require("express");   // won't gonna use it 
import express from 'express';   // gonna use import and export they r more convenient
import "dotenv/config";   // used to read value for .env

const app = express();
const PORT = process.env.PORT; 

console.log(process.env.DB_URL);


// app is listening
app.listen(PORT, () => console.log("server is running on the PORT :", PORT));
