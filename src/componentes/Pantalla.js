import React from 'react';
import '../hojas-de estilos/Pantalla.css'


/* Aparte de esta forma de omenzar un componente...
function Pantalla(props){
return(
)
} podemos hacerla de la siguiente forma...*/
/* se utiliza para componentes sencillos que no tienen una lógica 
el valor de la constante pantalla será el props desestructuración que llamamos en este caso input que ingresa el usuario
* va a ir variando y devolvera por funcion flecha en el div*/

const Pantalla = ({ input }) => (
   <div className='input'>
      {input}
   </div>
)

export default Pantalla;