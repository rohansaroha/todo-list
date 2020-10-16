const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors())

app.listen(9999,()=>{
    console.log("Server is listening")
})
