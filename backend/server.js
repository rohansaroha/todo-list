const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())
app.use(cors())

app.get('/',(req, res) => {
    res.send('hello')
})

app.post('/',(req, res) => {
    const text = req.body;
    console.log(req.body);
    console.log(text);
})

app.listen(9999,()=>{
    console.log("Server is listening")
})
