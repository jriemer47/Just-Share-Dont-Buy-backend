const db = require('../../query/db')

// gets all items available in db
getAll = () => {
  console.log('is this working')

  return db('items')
    .then((result) => {
      return result
    })
}

module.exports = {
  getAll
}