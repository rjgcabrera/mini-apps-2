// DB CONTROLLA

const model = require('../model/index.js');

module.exports = {
  post: (req, res) => {
    console.log('req.body: ', req.body);
    model.create(req.body)
      .then((result) => {
        console.log('DB INSERT SUCCESS: ', result);
        res.send()
      })
        .catch((err) => {
          console.log('DB INSERT ERROR: ', err);
          res.status(404).send('DB INSERT ERROR');
        });
  },

  //TODO
  patch: (req, res) => {
    console.log('req.body: ', req.body);
    model.update({name: req.body.name}, req.body)
      .then((result) => {
        console.log('DB PATCH SUCCESS: ', result);
        res.send()
      })
        .catch((err) => {
          console.log('DB INSERT ERROR: ', err);
          res.status(404).send('DB INSERT ERROR');
        });
  }
}
