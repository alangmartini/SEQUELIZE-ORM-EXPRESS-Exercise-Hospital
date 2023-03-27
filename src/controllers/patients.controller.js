const { patientsService } = require('../services');
const { sendError } = require('./utils/sendError');

const getAllPatients = async (req, res) => {
  const queries = req.query;

  const allPatients = await patientsService.findAll(queries);

  if (allPatients.message) {
    sendError(allPatients, res);
    return;
  }

  return res.status(200).json(allPatients);
};

const getPacientsJoinPlansById = async (req, res) => {
  const { id } = req.params;

  const patientsWithId = await patientsService.findById(id);

  if (patientsWithId.message) {
    return sendError(patientsWithId, res);
  }

  return res.status(200).json(patientsWithId);
};

const addNewPatient = async (req, res) => {
  const newPatient = req.body;

  const addNewPatient = await 

};

module.exports = {
  getAllPatients,
  getPacientsJoinPlansById,
};