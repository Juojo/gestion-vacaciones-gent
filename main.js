const mysql = require('mysql2');
const config = require('./db/config')
const connection = mysql.createConnection(config);

console.log("Hola");

connection.query(
    'SELECT * FROM empleados',
    function(err, results) {
        try {
            console.log(results[0].Nombre);
        } catch (error) {
            console.log('Error: ', err);
        }
    }
  );