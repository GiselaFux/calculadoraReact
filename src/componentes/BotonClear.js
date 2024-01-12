import React from 'react';
import '../hojas-de estilos/BotonClear.css';


const BotonClear= (props ) => (
      <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
      </div>
   )
/* en lugar de color porps.children se podría poer directamente clear sin llaves ni nada, porque es texto fijo */

export default BotonClear;