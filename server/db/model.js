const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'movie_lister',
});

class Movie {
  
  getAll(opts, cb) {
    let quer = 'SELECT * FROM movies';
    connection.query(quer, opts, (err, res, fields) => {
      if (err) {
        cb(err)
      } else {
        cb(null, res);
      }
    });
  }

  addOne(opts, cb) {
    let quer = 'INSERT INTO movies SET ?';
    connection.query(quer, opts, (err, res, fields) => {
      if (err) {
        cb(err)
      } else {
        cb(null, res);
      }
    });
  }

  delOne(opts, cb) {
    console.log(opts);
    let quer = 'DELETE FROM movies WHERE ?';
    connection.query(quer, opts, (err, res, fields) => {
      if (err) {
        cb(err)
      } else {
        cb(null, res);
      }
    });
  }

}

module.exports.Movie = new Movie;