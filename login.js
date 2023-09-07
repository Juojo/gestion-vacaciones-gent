const user = connection.query(
    'SELECT nombre FROM empleados',
    function(err, results) {
        if (err) {
            console.log('Error: ', err);
        }
        console.log(results[0].Nombre);
    }
  );

const contrasena = connection.query(
    `SELECT * FROM empleados WHERE contrasena = ${inputC}`,
    function(err, results) {
        if (err) {
            console.log('Error: ', err);
        }
        console.log(results[0].contrasena);
    }
  );

if (inputU === user && inputC === contrasena) {
    
}