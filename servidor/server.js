// Se debe correr la base de datos antes de ejecutar el servidor (schema en ./db/bdvacas.sql)

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

// app.post('/api/crearUsuario', (req, res) => {
//   const datosRecibidos = req.body; // Acceder a los datos enviados desde el cliente

//   const query = `insert into empleados values (${datosRecibidos.dni}, "${datosRecibidos.nombre}", "${datosRecibidos.apellido}", ${datosRecibidos.contrasena}, ${datosRecibidos.telefono}, "${datosRecibidos.email}", "${datosRecibidos.direccion}", "${datosRecibidos.localidad}", ${datosRecibidos.fechaIngreso}, "${datosRecibidos.area}");`;

//   connection.query(query,
//     function(err, results) {
//         if (err) {
//             console.log('Error: ', err);
//         } else {
//           res.send(results);
//           console.log("El usuario con dni: se inserto correctamente en la base de datos.");
//         }
//     }
//   );
// }); 

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
              
              connection.query(`select area from empleados where dni = ${req.query.dni} and contrasena = "${req.query.password}";`,
                function(err, results2) {
                    if (err) {
                        console.log('Error: ', err);
                    } else {
                      const area = results2[0].area;
                      console.log(area);
                      console.log("Bienvenido " + req.query.dni);
                      res.send({ area: area, estado: "aceptado" });
                    }
                }
              );

              
            }
          }
      }
    );
});

app.get('/api/matrizEstaOcupado', (req, res) => {
  const matrizEstaOcupado = require('../programaVacaciones/main')
  //console.log(matrizEstaOcupado);

  res.json(matrizEstaOcupado);
})

// app.get('/api/esJefe', (req, res) => {
//   const query = `select * from jefe where Id_Empleado = ${req.query.empleado};`;

//     connection.query(query,
//       function(err, results) {
//           if (err) {
//               console.log('Error: ', err);
//           } else {
//             if (results.length === 0) {
//               console.log("El usuario no es jefe");
//               res.send({ resultados: results, estado: "denegado" });
//             } else {
//               console.log("El usuario " + req.query.dni + " es jefe");
//               res.send({ resultados: results, estado: "aceptado" });
//             }
//           }
//       }
//     );
// });

// app.post('/api/crearVacacion', (req, res) => {
//   const datosRecibidos = req.body;

//   const query = `insert into vacaciones (Estado, FechaI, FechaF, Id_Empleado) values (false, "${datosRecibidos.FechaI}", "${datosRecibidos.FechaF}", ${datosRecibidos.Id_Empleado});`;

//   connection.query(query,
//     function(err, results) {
//         if (err) {
//             console.log('Error: ', err);
//         } else {
//           res.send(results);
//           console.log("Se creo el pedido de vacaciones");
//         }
//     }
//   );
// }); 

// app.get('/api/select', (req, res) => {
//     const query = 'select * from empleados;'

//       connection.query(query,
//         function(err, results) {
//             if (err) {
//                 console.log('Error: ', err);
//             } else {
//               res.send(results);
//             }
//         }
//       );
// })

// app.get('/api/obtenerFechas', (req, res) => {
//   const dni = req.query.dni; // Obtén el valor del parámetro "dni" de la URL
//   const query = `select * from vacaciones where Id_Empleado = ${dni} and Estado = false limit 1;`;

//   connection.query(query,
//     function(err, results) {
//         if (err) {
//             console.log('Error: ', err);
//         } else {
//           if (results.length === 0) {
//             console.log("El usuario no tiene vacaciones pendientes");
//             res.send({ estado: "denegado" });
//           } else {
//             console.log("Monstrando el pedido de vacacion de " + dni);
//             res.send({ id: results[0].Id_Vacacion, FechaI: results[0].FechaI, FechaF: results[0].FechaF, estado: "aceptado" });
//           }
//         }
//     }
//   );
// });

// app.post('/api/aceptarVacacion', (req, res) => {

//   const query = `update vacaciones set estado = true where Id_Vacacion = ${req.query.id}`;

//   connection.query(query,
//     function(err, results) {
//         if (err) {
//             console.log('Error: ', err);
//         } else {
//           res.send(results);
//           console.log("Se creo el pedido de vacaciones");
//         }
//     }
//   );
// }); 

// app.post('/api/rechazarVacacion', (req, res) => {

//   const query = `delete * from vacaciones where Id_Vacacion = ${req.query.id}`;

//   connection.query(query,
//     function(err, results) {
//         if (err) {
//             console.log('Error: ', err);
//         } else {
//           res.send(results);
//           console.log("Se borro el pedido de vacaciones");
//         }
//     }
//   );
// }); 

// app.post('/api/insertarVacaciones', (req, res) => {
//   const datosRecibidos = req.body;

//   // Asegúrate de que los nombres de las propiedades coincidan con los nombres de las columnas en tu tabla 'vacaciones'
//   const query = `INSERT INTO vacaciones (FechaI, FechaF, Id_Empleado) VALUES (?, ?, ?);`;
//   // ${datosRecibidos.FechaI}, ${datosRecibidos.FechaF}, ${datosRecibidos.id}

//   // En lugar de pasar los valores directamente en la consulta SQL, usa un array para evitar SQL injection
//   const values = [datosRecibidos.FechaI, datosRecibidos.FechaF, datosRecibidos.Id_Empleado];

//   connection.query(query, values, function(err, results) {
//       if (err) {
//           console.error('Error: ', err);
//           res.status(500).json({ estado: "error" });
//       } else {
//           console.log("Solicitud de vacaciones insertada correctamente en la base de datos.");
//           res.json({ estado: "insertado" });
//       }
//   });
// });


// /*
// {
//   "dni": 12344433,
//   "nombre": "Juan",
//   "apellido": "m",
//   "contrasena": 123,
//   "telefono": 10000,
//   "email": "mail",
//   "direccion": "mi dire",
//   "localidad": "localidad",
//   "fechaIngreso": "0000-01-01",
//   "area": "area"
// }
// */