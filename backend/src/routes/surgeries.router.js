const express = require('express');
const { surgeriesController } = require('../controllers');

const surgeriesRouter = express.Router();

surgeriesRouter.use('/:name', surgeriesController.findSurgeriesByName);

module.exports = {
  surgeriesRouter,
};