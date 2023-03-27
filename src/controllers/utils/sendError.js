const Boom = require('@hapi/boom');

const sendError = (error, res) => {
  if (Boom.isBoom(error)) {
    const { statusCode, payload } = error.output;
    return res.status(statusCode).json(payload);
  }

  const status = error.status || 500;
  const message = error.message || 'Internal Server Error';

  return res.status(status).json({ message });
};

module.exports = {
  sendError,
};