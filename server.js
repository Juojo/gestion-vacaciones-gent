const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');

const mysql = require('mysql2');
const config = require('./db/config');
const connection = mysql.createConnection(config);

app.use(express.json());
app.use(cors());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/api', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.post('/api/crearUsuario', (req, res) => {
  const datosRecibidos = req.body; // Acceder a los datos enviados desde el cliente

  const query = `insert into empleados values (${datosRecibidos.dni}, "${datosRecibidos.nombre}", "${datosRecibidos.apellido}", ${datosRecibidos.contrasena}, ${datosRecibidos.telefono}, "${datosRecibidos.email}", "${datosRecibidos.direccion}", "${datosRecibidos.localidad}", ${datosRecibidos.fechaIngreso}, "${datosRecibidos.area}");`;

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
}); 

app.get('/api/selectLogin', (req, res) => {
  const query = `select * from empleados where dni = ${req.query.dni} and contrasena = "${req.query.password}";`;

    connection.query(query,
      function(err, results) {
          if (err) {
              console.log('Error: ', err);
          } else {
            if (results.length === 0) {
              console.log("No existe el usuario o la contraseña es incorrecta");
              res.send({ resultados: results, estado: "denegado" });
            } else {
              console.log("Bienvenido " + req.query.dni);
              res.send({ resultados: results, estado: "aceptado" });
            }
          }
      }
    );
});

app.get('/api/esJefe', (req, res) => {
  const query = `select * from jefe where Id_Empleado = ${req.query.empleado};`;

    connection.query(query,
      function(err, results) {
          if (err) {
              console.log('Error: ', err);
          } else {
            if (results.length === 0) {
              console.log("El usuario no es jefe");
              res.send({ resultados: results, estado: "denegado" });
            } else {
              console.log("El usuario " + req.query.dni + " es jefe");
              res.send({ resultados: results, estado: "aceptado" });
            }
          }
      }
    );
});

app.post('/api/crearUsuario', (req, res) => {
  const datosRecibidos = req.body;

  const query = `insert into vacaciones (Estado, FechaI, FechaF, Id_Empleado) values (false, ${datosRecibidos.FechaI}, ${datosRecibidos.FechaF}, ${datosRecibidos.Id_Empleado});`;

  connection.query(query,
    function(err, results) {
        if (err) {
            console.log('Error: ', err);
        } else {
          res.send(results);
          console.log("Se creo el pedido de vacaciones");
        }
    }
  );
}); 

app.get('/api/selectVacaciones', (req, res) => {
  vacacion = req.body;
  const query = `select * from vacaciones where Id_Empleado = ${vacacion.Id_Empleado} and estado = false;`;

    connection.query(query,
      function(err, results) {
          if (err) {
              console.log('Error: ', err);
          } else {
            res.send({ FechaI: results[0].FechaI, FechaF: results[0].FechaF });
            if (results.length === 0) {
              console.log("El usuario no tiene vacaciones pendientes");
            } else {
              console.log("Monstrando el pedido de vacacion de " + vacacion.Id_Empleado);
            }
          }
      }
    );
});


app.get('/api/select', (req, res) => {
    const query = 'select * from empleados;'

      connection.query(query,
        function(err, results) {
            if (err) {
                console.log('Error: ', err);
            } else {
              res.send(results);
            }
        }
      );
})

/*
{
  "dni": 12344433,
  "nombre": "Juan",
  "apellido": "m",
  "contrasena": 123,
  "telefono": 10000,
  "email": "mail",
  "direccion": "mi dire",
  "localidad": "localidad",
  "fechaIngreso": "0000-01-01",
  "area": "area"
}
*/