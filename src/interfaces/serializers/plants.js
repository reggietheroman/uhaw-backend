'use strict';

class PlantSerializer {

  serialize(data, entity) {
    if (Array.isArray(data)) {
      return { entity: data.map(_serializePlant) };
    }
    return _serializePlant(data);
  }
}

module.exports = { PlantSerializer };

const _serializePlant = function(plant) {
  return {
    'id': plant.id,
    'name': plant.name,
    'type': plant.type,
    'watered-dates': plant.wateredDates
  }
}
