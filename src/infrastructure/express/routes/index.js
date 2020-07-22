'use strict';

const plantRoutes = require('./plants');

function loadRoutes(app) {
  app.use('/plants', plantRoutes);

  console.log('Routes loaded');
  return app;
}

module.exports = { loadRoutes };

