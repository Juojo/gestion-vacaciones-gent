const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const mysql = require('mysql2');
const config = require('./db/config');
const connection = mysql.createConnection(config);

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/api', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/api/enviarDatos', (req, res) => {
  const datosRecibidos = req.body; // Acceder a los datos enviados desde el cliente
  console.log(datosRecibidos.dni);


  const query = `insert into empleados values (${dni}, ${nombre}, ${apellido}, ${contrasena}, ${telefono}, ${email}, ${direccion}, ${localidad}, ${fechaIngreso}, ${area});`; 

  connection.query(query,
    function(err, results) {
        if (err) {
            console.log('Error: ', err);
        } else {
          res.send(results);
          console.log("El usuario con dni: se inserto correctamente en la base de datos.");
        }
    }
  );

  // Luego, puedes enviar una respuesta al cliente
  res.json({ mensaje: 'Datos recibidos correctamente', datos: datosRecibidos });
}); 
 

app.post('./', (req, res) => {
  const datosRecibidos = req.body; // Acceder a los datos enviados desde el cliente

  // Procesar los datos y enviar una respuesta al cliente
  res.json({ mensaje: 'Datos recibidos correctamente', datos: datosRecibidos });
});

app.get('/api/select', (req, res) => {
    //const query = `insert into empleados values (${dni}, ${nombre}, ${apellido}, ${contrasena}, ${telefono}, ${email}, ${direccion}, ${localidad}, ${fechaIngreso}, ${area});`; 
    const query = 'select * from empleados;'

      connection.query(query,
        function(err, results) {
            if (err) {
                console.log('Error: ', err);
            } else {
              res.send(results);
              console.log("El usuario con dni: se inserto correctamente en la base de datos.");
            }
        }
      );
})

