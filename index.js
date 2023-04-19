const express = require('express');
const app = express();
require('dotenv').config();
const weatherRoutes = require('./routes/weatherRoutes');// Import routes
app.use('/weather', weatherRoutes);// Use routes
// Server
const port =process.env.PORT;
app.listen(port, ()=> {
    console.log(`App is Listening at the port : ${port}`);
});