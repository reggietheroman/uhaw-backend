'use strict';

const ListPlants = require('../../application/useCases/plants/listPlants');
const ENTITY = 'plants';

// really thing i dont need the httpRequest parameter
async function listPlants(httpRequest, repositoryImplementation, serializers) {
  let limit = 10;
  let page = 0;

  //const plants = await ListPlants(limit, page, repositoryImplementation);
  let plants = {};
  let plantSerializer = new serializers.PlantSerializer();
  return plantSerializer.serialize(plants, ENTITY);
}

module.exports = {
  listPlants
};

