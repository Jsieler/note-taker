const fs = require('fs');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use((req, res) => {
    res.status(404).end();
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});