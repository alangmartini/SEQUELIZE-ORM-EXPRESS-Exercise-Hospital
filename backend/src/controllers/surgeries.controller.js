const { surgeriesService } = require('../services');
const { sendError } = require('./utils/sendError');

const findSurgeriesByName = async (req, res) => {
  const { name } = req.params;

  const surgeriesByDoctor = await surgeriesService.findByName(name);

  if (surgeriesByDoctor instanceof Error) {
    return sendError(surgeriesByDoctor, res);
  }

  return res.status(200).json({ surgeriesByDoctor });
};

const findAllSurgeries = async (req, res) => {
  const allSurgeries = await surgeriesService.findAll();

  if (allSurgeries instanceof Error) {
    return sendError(allSurgeries, res);
  }

  return res.status(200).json({ allSurgeries });
};


module.exports = {
  findSurgeriesByName,
  findAllSurgeries,
};