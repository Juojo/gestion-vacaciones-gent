const mysql = require('mysql');
const config = require('./db/config')
const connection = mysql.createConnection(config);

connection.query(
    'SELECT * FROM empleados',
    function(err, results) {
        try {
            console.log(results);
        } catch (error) {
            console.log('Error: ', err);
        }
    }
  );