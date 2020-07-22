'use strict';

class ExpressAdapter {

  makeExpressCallback(controller, repositoryImplementation, serializer) {
    return function(req, res) {
      const httpRequest = {
        body: req.body,
        query: req.query,
        params: req.params,
        ip: req.ip,
        method: req.method,
        path: req.path,
        headers: {
          'Content-Type': req.get('Content-Type'),
          Referer: req.get('referer'),
          'User-Agent': req.get('User-Agent')
        }
      }

      controller(httpRequest, repositoryImplementation, serializer)
        .then((data) => {
          res.status(200)
             .json({
               code: 200,
               message: 'Success',
               data: data
             });
        })
        .catch((error) => {
          res.status(500).send({ error: error});
        });
    }
  }
}

module.exports = ExpressAdapter;

