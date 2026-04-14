// const express = require('express'); CommonJS

import express from 'express';  // ES Modules

const app = express();

//Routing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});