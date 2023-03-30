const Boom = require('@hapi/boom');
const { patientSchema } = require('./validations/patient.schema');

const validatePatient = async (req, res, next) => {
  const newPatient = req.body;

  const { error } = patientSchema.validate(newPatient);

  if (error) {
    const boomError = Boom.badRequest(error.message);
    const { payload, statusCode } = boomError.output;
    return res.status(statusCode).json(payload);
  }

  next();
};

module.exports = {
  validatePatient,
};