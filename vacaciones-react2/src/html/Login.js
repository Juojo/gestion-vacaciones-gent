import '../css/Login.css';

function Login() {
  return (
    <form action="/action_page.php" style={{ border: "1px" || "solid" || "#ccc" }}>
      <div class="container">
        <h1>Log In</h1>
        <hr />
    
        <label for="email"><b>DNI</b></label>
        <input type="number" placeholder="Documento" name="email" required />
    
        <label for="psw"><b>Contrasena</b></label>
        <input type="password" placeholder="Crear Contrasena" name="psw" required />
    
        <div class="clearfix">
          <button type="button" class="cancelbtn">Cancelar</button>
          <button type="submit" class="signupbtn">Ingresar</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
