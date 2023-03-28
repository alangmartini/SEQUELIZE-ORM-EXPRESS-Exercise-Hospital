const Boom = require('@hapi/boom');
const { Op } = require('sequelize');
const models = require('../models');

const findByName = async (name) => {
  const surgeriesFromName = await models.Surgery.findAll({
    where: {
      doctor: {
        [Op.like]: `%${name}%`,
      },
    },
  });

  if (!surgeriesFromName || surgeriesFromName.length === 0) {
    const error = Boom.notFound('No surgeries from given Doctor');
    return error;
  }
  
  return surgeriesFromName;
};

module.exports = {
  findByName,
};