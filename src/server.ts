// const express = require('express'); CommonJS

import express from 'express';  // ES Modules

const app = express();

//Routing
app.get('/', (req, res) => {
    res.send('Hola mundo en Express / TypeScript!');
});

export default app;