const express = require("express");

const app = express();
app.get('/',(req, res) => {
    res.send("Hello form Express");
});

app.listen(8080);