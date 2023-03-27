const Boom = require('@hapi/boom');
const Sequelize = require('sequelize');
const models = require('../models');

const { Op } = Sequelize;

const applyQuery = (arrayOfEntries) => {
  const includeObject = {
    plans: (idArr) => ({ 
      model: models.Plan, 
      as: 'Plans',
      where: { plan_id: { [Op.in]: idArr } },
    }),
    surgeries: (id) => ({ 
      model: models.Surgery, 
      as: 'Surgeries',
      through: { attributes: [] },
      where: { id },
    }),
      
    undefined: {},
  };

  return arrayOfEntries.reduce((acc, curr) => {
    acc.include.push(includeObject[curr[0]](curr[1]));

    return acc;
  }, { include: [] });
};

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

module.exports = {
  findAll,
  findById,
};