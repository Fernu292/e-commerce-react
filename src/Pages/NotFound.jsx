import React from 'react';
import NotFoundImg from '../img/NotFound-404.svg';
import '../styles/NotFound.css';
const NotFound = () => {
    return ( 
        <div className='container'>
            <img src={NotFoundImg} />
            <h3>Pagina no encontrada</h3>
        </div>
     );
}
 
export default NotFound;