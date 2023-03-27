const express = require('express');
const { patientsController } = require('../controllers');

const patientsRouter = express.Router();

patientsRouter.get('/', patientsController.getAllPatients);

patientsRouter.get('/plans/:id', patientsController.getPacientsJoinPlansById);

patientsRouter.post('/',
  patientsController.addNewPatient,
  
  );

module.exports = {
  patientsRouter,
};