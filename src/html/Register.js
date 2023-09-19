const mysql = require('mysql2');
const config = require('../db/config')
const connection = mysql.createConnection(config);

import '../css/Login.css';

function Register() {

  let formularioRegister = document.getElementById(formularioRegister);

  formularioRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById(email);
    let dni = document.getElementById(dni);
    let telefono = document.getElementById(telefono);
    let nombre = document.getElementById(nombre);
    let apellido = document.getElementById(apellido);
    let direccion = document.getElementById(direccion);
    let localidad = document.getElementById(localidad);
    let contrasena = document.getElementById(contrasena);
    let area = document.getElementById(area);
    let fechaIngreso = document.getElementById(fechaIngreso);
    
    connection.query(
      `insert into empleados values (${dni}, ${nombre}, ${apellido}, ${contrasena}, ${telefono}, ${email}, ${direccion}, ${localidad}, ${fechaIngreso}, ${area});`,
      function(err, results) {
          if (err) {
              console.log('Error: ', err);
          } else {
            console.log("El usuario con dni: " + dni + " se inserto correctamente en la base de datos.");
          }
      }
    );
  });

  return (
      <form action="/action_page.php" style={{border: "1px" || "solid" || "#ccc"}}>
            <div className="container">
              <h1>Sign Up</h1>
              <hr />
          
              <label for="email"><b>Email</b></label>
              <input id='email' type="text" placeholder="Email" name="email" required />

              <br />
              <br />
              <label for="email"><b>DNI</b></label>
              <input id='dni' type="number" placeholder="Documento" name="email" required />
        
              <label for="email"><b>Telefono</b></label>
              <input id='telefono' type="number" placeholder="Telefono celular" name="email" required />
        
              <label for="email"><b>Nombre</b></label>
              <input id='nombre' type="text" placeholder="Nombre o nombres" name="email" required />
        
              <label for="email"><b>Apellido</b></label>
              <input id='apellido' type="text" placeholder="Apellido o apellidos" name="email" required />
        
              <label for="email"><b>Direccion</b></label>
              <input id='direccion' type="text" placeholder="Direccion particular" name="email" required />
        
              <label for="psw-repeat"><b>Localidad</b></label>
              <input id='localidad' type="text" placeholder="Localidad" name="psw-repeat" required />     
          
              <label for="psw"><b>Contrasena</b></label>
              <input id='contrasena' type="password" placeholder="Crear Contrasena" name="psw" required />
          
              <label for="psw-repeat"><b>Area</b></label>
              <input id='area' type="text" placeholder="Area en la empresa" name="psw-repeat" required />
        
              <label for="psw-repeat"><b>Fecha ingreso</b></label>
              <br />
              <input id='fechaIngreso' type="date" />
              <br />
              <br />
              
              <p>Al crear una cuenta esta aceptando nuestros Terminos & Condiciones</p>
          
              <div class="clearfix">
                <button type="button" class="cancelbtn">Cancelar</button>
                <button type="submit" class="signupbtn">Registrarse</button>
              </div>

            </div>
    </form>
  );
}

export default Register;
