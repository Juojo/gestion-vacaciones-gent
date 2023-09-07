const mysql = require('mysql2');
const config = require('./db/config')
const connection = mysql.createConnection(config);

connection.query(
    'SELECT * FROM empleados',
    function(err, results) {
        if (err) {
            console.log('Error: ', err);
        }
        console.log(results[0].Nombre);
    }
  );