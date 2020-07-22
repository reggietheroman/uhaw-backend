'use strict';

function listPlants(limit, page, plantRepository) {
  return plantRepository(limit, page);
}

module.exports = listPlants;
