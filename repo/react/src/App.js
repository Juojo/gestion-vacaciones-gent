import React from "react";

import './css/App.css'

const App = () =>{
    return (
        <div class="main-box">
        <h2>Gestion De Vacaciones</h2>
        <form>
          <div class="LogIn-box">
              <a href="./paginas/LogIn.html">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Log In
              </a>
            
          </div>
          <div class="LogIn-box">
            <a href="./paginas/SignUp.html">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign Up
            </a>
          </div>
        </form>
      </div>
    )
}

console.log("Holas");

export default App