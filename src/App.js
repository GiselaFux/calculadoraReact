
import './App.css';
import freeCodeCampLogo from './imagenes/misuse-3.png';
import Boton from './componentes/Boton.js';
import Pantalla from './componentes/Pantalla.js';
import BotonClear from './componentes/BotonClear.js'
import {useState} from 'react';
import { evaluate } from 'mathjs';

function App() {

const [input, setInput] = useState('');

const agregarInput= val =>{
  setInput(input + val)
}

const calcularResultado = () => {
  if (input) {
    setInput(evaluate(input))
  } else {
    alert('Por favor, ingrese valores para realizar los cálculos')
  }
  
};

  return (
    <div className='App'>

      <div className='freecodecamp-logo-contenedor'>

        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='logo-freecodecamp' />

      </div>

      <div className='contenedor-calculadora'>
        <Pantalla input= {input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput} >2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')} >Clear</BotonClear> {/* si en botonClear pusieramos la palabra clear en lugar de props.children,aquí se debería poner solo etigueta de apertura y cierre del componente-1 sola etiqueta con todo- */}
        </div>


      </div>

    </div>
  );
}

export default App;
