const JOI = require('joi');

const patientSchema = JOI.object({
  fullName: JOI.string().min(5).required(),
  planId: JOI.number().min(1).max(5).required(),
}).required();

module.exports = {
  patientSchema,
};