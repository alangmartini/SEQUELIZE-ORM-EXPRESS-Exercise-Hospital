const { patientsRouter } = require('./patients.router');
// const { plansRouter } = require('./plans.router');
const { surgeriesRouter } = require('./surgeries.router');
const { loginRouter } = require('./login.router');

module.exports = {
  patientsRouter,
  // plansRouter,
  surgeriesRouter,
  loginRouter,
};