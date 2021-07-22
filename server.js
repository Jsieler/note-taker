const fs = require('fs');
const path = require('path');
const express = require('express');

const api = require('./routes/apiroutes')
const html = require("./routes/htmlroutes")

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", html)
app.use("/api", api)

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});