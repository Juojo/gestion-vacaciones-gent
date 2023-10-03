const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

const mysql = require('mysql2');
const config = require('./src/db/config')
const connection = mysql.createConnection(config);

app.get('/api/selectBD', (req, res) => {
    //const query = `insert into empleados values (${dni}, ${nombre}, ${apellido}, ${contrasena}, ${telefono}, ${email}, ${direccion}, ${localidad}, ${fechaIngreso}, ${area});`; 
    const query = 'select * from empleados;'

      connection.query(query,
        function(err, results) {
            if (err) {
                console.log('Error: ', err);
            } else {
              console.log("El usuario con dni: " + + " se inserto correctamente en la base de datos.");
            }
        }
      );     
})

// app.post('./', (req, res) => {
//     const datosRecibidos = req.body; // Acceder a los datos enviados desde el cliente
  
//     // Procesar los datos y enviar una respuesta al cliente
//     res.json({ mensaje: 'Datos recibidos correctamente', datos: datosRecibidos });
//   });