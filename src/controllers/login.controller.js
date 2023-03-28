const Boom = require('@hapi/boom');
const loginServices = require('../services');  

const enter = async (req, res) => {
  const loginInfo = req.body;

  if (!loginInfo.email || !loginInfo.password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const token = await loginServices.login(loginInfo);
    res.status(200).json({ token });
  } catch (error) {
    const boomError = Boom.unauthorized(error.message);
    res.status(boomError.output.statusCode).json(boomError.output.payload);
  }
};

module.exports = {
  enter,
};