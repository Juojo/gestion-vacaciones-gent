const mysql = require('mysql2');
const config = require('../db/config')
const connection = mysql.createConnection(config);

let formularioRegister = document.getElementById(formularioRegister);

formularioRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    var nombre = document.getElementById(usuario)
    var contrasena = document.getElementById(contrasena)
    
    if (username.value == "" || password.value == "") {
        alert("Complete todos los campos obligatorios")
      } else {
        buscarEmpleado("nombre");
        buscarEmpleado("pw");
      }
  });

function buscarEmpleado(campo) {
    encotrado = false;
    
    switch (resultado) {
        case nombre:
            connection.query(
                `SELECT nombre FROM empleados where nombre ${nombre}`,
                function(err, results) {
                    if (err) {
                        console.log('Error: ', err);
                    }
                    console.log(results[0].nombre);
                }
              );
            break;
            
        case contrasena:

            break;
        default:
            break;
    }

    return encontrado;
}

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