'use strict';

const mongoose = require('mongoose');
const Plant = require('../../../domain/plants');
const PlantModel = require('../../database/orm/mongoose/schemas/plants');
const PlantRepository = require('../../../application/repositories/plants');
const mongoosePlant = mongoose.model('Plant');

class repositoryImplementation extends PlantRepository {
  listPlants(limit, page) {
    mongoosePlant.find({}, function(err, plants) {
      return plants;
    });
  }
}

module.exports = repositoryImplementation;

