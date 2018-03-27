const model = require('../models/items')

// lists all items in db
getAll = (req, res, next) => {
  console.log('hello');
  const item = model.getAll((result, error) => {

    if (error) {
      console.log('error is working')
      res.status(404).send('Items do not exists')
    }
    res.status(200).json(result)
  })
}


module.exports = {
  getAll
}