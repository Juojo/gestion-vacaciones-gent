import '../css/Login.css';

// const express = require('express'); 
// const app = express(); 
const mysql = require('mysql2');
const config = require('../db/config')

// const connection = mysql.createConnection(config);

function Register() {

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

  let formularioRegister = document.getElementById(formularioRegister);

  formularioRegister.addEventListener("submit", (e) => {
    e.preventDefault();

    
    // let email = document.getElementById(email);
    // let dni = document.getElementById(dni);
    // let telefono = document.getElementById(telefono);
    // let nombre = document.getElementById(nombre);
    // let apellido = document.getElementById(apellido);
    // let direccion = document.getElementById(direccion);
    // let localidad = document.getElementById(localidad);
    // let contrasena = document.getElementById(contrasena);
    // let area = document.getElementById(area);
    // let fechaIngreso = document.getElementById(fechaIngreso);

    const datosAEnviar = {
      email: document.getElementById('email').value,
      dni: document.getElementById('dni').value,
      telefono: document.getElementById('telefono').value,
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      direccion: document.getElementById('direccion').value,
      localidad: document.getElementById('localidad').value,
      contrasena: document.getElementById('contrasena').value,
      area: document.getElementById('area').value,
      fechaIngreso: document.getElementById('fechaIngreso').value,
    };

    fetch('/api/selectBD')
      .then((response) => response.json())
      .then((data) => {
        // Manejar los datos recibidos desde el servidor
        console.log(data);
      })
      .catch((error) => {
        // Manejar errores de solicitud
        console.error(error);
      });

    
  });
}

export default Register;
