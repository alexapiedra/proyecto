// se importa libreria react
import React from 'react';

//se importa logo
import logo from './logo.svg';

//se importa estilos
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// se importa el componente padre del header
import Headeralexa from "./components/header";
import Footeralexa from "./components/footer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Headeralexa></Headeralexa>
        <p>
          Hola angel
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Footeralexa></Footeralexa>
      </header>
    </div>
  );
}

export default App;
