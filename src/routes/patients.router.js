const express = require('express');
const { patientsController } = require('../controllers');

const patientsRouter = express.Router();

patientsRouter.get('/', patientsController.getAllPatients);

patientsRouter.get('/plans/:id', patientsController.getPacientsJoinPlansById);

module.exports = {
  patientsRouter,
};