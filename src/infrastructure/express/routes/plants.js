'use strict';

const express = require('express');
const router = express.Router();
const ExpressAdaptor = require('../expressAdaptor');
const plantRepository = require('../../repository/mongoose/plants');
const plantsController = require('../../../interfaces/controllers/plants');
const plantsSerializer = require('../../../interfaces/serializers/plants');

/*function plantRoutes() {
  console.log('in routes thing');
  let expressAdaptor = new ExpressAdaptor();
  let expressCallback = expressAdaptor.makeExpressCallback(plantsController, plantRepository, plantsSerializer);

  router.get('/', expressCallback);
  return router;
}

module.exports = plantRoutes;*/

let expressAdaptor = new ExpressAdaptor();
let expressCallback = expressAdaptor.makeExpressCallback(plantsController.listPlants, plantRepository, plantsSerializer);

router.get('/', expressCallback);

module.exports = router;

