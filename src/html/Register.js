import '../css/Login.css';

function Register() {
  return (
      <form action="/action_page.php" style={{border: "1px" || "solid" || "#ccc"}}>
            <div className="container">
              <h1>Sign Up</h1>
              <hr />
          
              <label for="email"><b>Email</b></label>
              <input type="text" placeholder="Email" name="email" required />

              <br />
              <br />
              <label for="email"><b>DNI</b></label>
              <input type="number" placeholder="Documento" name="email" required />
        
              <label for="email"><b>Telefono</b></label>
              <input type="number" placeholder="Telefono celular" name="email" required />
        
              <label for="email"><b>Nombre</b></label>
              <input type="text" placeholder="Nombre o nombres" name="email" required />
        
              <label for="email"><b>Apellido</b></label>
              <input type="text" placeholder="Apellido o apellidos" name="email" required />
        
              <label for="email"><b>Direccion</b></label>
              <input type="text" placeholder="Direccion particular" name="email" required />
        
              <label for="psw-repeat"><b>Localidad</b></label>
              <input type="text" placeholder="Localidad" name="psw-repeat" required />     
          
              <label for="psw"><b>Contrasena</b></label>
              <input type="password" placeholder="Crear Contrasena" name="psw" required />
          
              <label for="psw-repeat"><b>Area</b></label>
              <input type="text" placeholder="Area en la empresa" name="psw-repeat" required />
        
              <label for="psw-repeat"><b>Fecha ingreso</b></label>
              <br />
              <input type="date" />
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
