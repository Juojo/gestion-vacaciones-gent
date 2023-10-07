import { Link } from "react-router-dom";

import '../css/Home.css';

function Home() {
  return (
      
      <div class="main-box">
        <h2>Gestion De Vacaciones</h2>
        <form>
          <div class="LogIn-box">
            <Link to="/gestion-vacaciones-gent/login">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Log In
              </Link>
            
          </div>
          <div class="LogIn-box">
            <Link to="/gestion-vacaciones-gent/register">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign Up
            </Link>
          </div>
        </form>
      </div>
  );
}

export default Home;
