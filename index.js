require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
})