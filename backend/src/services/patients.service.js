const Boom = require('@hapi/boom');
const models = require('../models');

const findAll = async () => {
  const allPatients = await models.Patient.findAll();

  if (!allPatients) {
    return Boom.notFound('Nothing returned');
  }

  return allPatients;
};

const findById = async (id) => {
  const columnName = {
    planId: 'plan_id',
  };

  const patientsWithIds = await models.Patient.findAll({
    include: { model: models.Plan, as: 'Plans', where: { [columnName.planId]: id } }, // so lint wont cry
  });

  if (!patientsWithIds) {
    return Boom.notFound('Nothing with passed id');
  }

  return patientsWithIds;
};

const findWithSurgeries = async () => {
  const patientsWithSurgeries = await models.Patient.findAll({
    include: {
      model: models.Surgery,
      as: 'Surgeries',
      attributes: {
        exclude: ['doctor'],
      },
      through: { attributes: [] },
    },
  });

  return patientsWithSurgeries;
};

const createPatient = async (patient) => {
  try {
    const addedNewPatientResponse = await models.Patient.create(patient);

    // Gimmick so lint wont complain of _previousValues
    const keys = Object.keys(addedNewPatientResponse);
    const addedNewPatient = addedNewPatientResponse[keys[1]];

    return addedNewPatient;
  } catch (error) {
    const boomError = Boom.internal(error.message);
    return boomError;
  }
};

module.exports = {
  findAll,
  findById,
  findWithSurgeries,
  createPatient,
};