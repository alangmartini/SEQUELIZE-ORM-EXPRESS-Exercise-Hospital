const cors = require('cors');
const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/patients', router.patientsRouter);
app.use('/surgeries', router.surgeriesRouter);
app.use('/login', router.loginRouter);
// app.use('/plans', router.plansRouter);

module.exports = app;