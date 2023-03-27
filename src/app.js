const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());

app.use('/patients', router.patientsRouter);
// app.use('/plans', router.plansRouter);
// app.use('/surgeries', router.surgeriesRouter);

module.exports = app;