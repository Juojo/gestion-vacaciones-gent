import '../css/Login.css';

const axios = require('axios').default;

function Register() {
  document.addEventListener("DOMContentLoaded", function () {
    let submitB = document.getElementById('submitB');

    submitB.addEventListener("submit", (e) => {
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

      // Realizar una solicitud POST al servidor
        // fetch('/api/enviarDatos', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(datosAEnviar),
        // })
        //   .then((response) => response.json())
        //   .then((data) => {
        //     console.log(data); // Manejar la respuesta del servidor aquí
        //   })
        //   .catch((error) => {
        //     console.error('Error:', error);
        //   });
      
      axios.post('/api/enviarDatos', {
        dni: document.getElementById('dni').value,
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    });
  });

  return (
      <form id="formularioRegister" action="/action_page.php" style={{border: "1px" || "solid" || "#ccc"}}>
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
                <button id="submitB" type="submit" class="signupbtn">Registrarse</button>
              </div>

            </div>
    </form>
  );
}

export default Register;
