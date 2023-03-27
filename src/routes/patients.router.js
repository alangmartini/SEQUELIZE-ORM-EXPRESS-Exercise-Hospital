const express = require('express');
const { patientsController } = require('../controllers');
const middlewares = require('../middlewares');

const patientsRouter = express.Router();

patientsRouter.get('/', patientsController.getAllPatients);

patientsRouter.get('/plans/:id', patientsController.getPacientsJoinPlansById);

patientsRouter.post('/',
  middlewares.patientsMiddleware.validatePatient,
  patientsController.addNewPatient);

module.exports = {
  patientsRouter,
};