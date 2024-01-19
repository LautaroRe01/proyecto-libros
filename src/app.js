const express = require('express');
const path = require ('path');
const app = express();

app.use(express.static(path.join(__dirname, '../public')));

const port = 3306;

app.listen(port, () => {
    console.log(`Servidor Express escuchando en http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/home.html"))

});