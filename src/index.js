const express = require('express');
const bodyParser = require('body-parser');
const db = require('./infrastructure/database/drivers/mongoose');
const router = require('./infrastructure/express/routes');
const app = express();

app.use(bodyParser.json());
db.connect();
router.loadRoutes(app);

app.listen(1337, () => {
  console.log('Server running on port 1337');
});

