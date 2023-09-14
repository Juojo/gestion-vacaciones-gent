import '../css/Login.css';

function Login() {
  return (
    <form action="/action_page.php" style={{ border: "1px" || "solid" || "#ccc" }}>
        <div className="container">
          <h1>Log In</h1>
      
          <label for="email"><b>DNI</b></label>
          <input type="text" placeholder="Documento" name="email" required />
      
          <label for="psw"><b>Contrasena</b></label>
          <input type="password" placeholder="Crear Contrasena" name="psw" required />
          
          {/* <label>
              <input type="checkbox" checked="checked" name="remember" style={{ marginBottom: '15px' }} value="Recordarme" />
          </label> */}
      
          <div class="clearfix">
            <button type="button" className="cancelbtn">Cancelar</button>
            <button type="submit" className="signupbtn">Sign Up</button>
          </div>
        </div>
      </form>
  );
}

export default Login;
