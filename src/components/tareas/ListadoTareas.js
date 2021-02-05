import React, { Fragment } from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Identidad del sitio', estado: false },
        { nombre: 'Elegir Hosting', estado: true },
    ]

    return ( 
        <Fragment>
            <h2>Proyecto: TiendaVirtual</h2>

            <ul className="listado-tareas">
                { tareasProyecto.length === 0
                    ? (<li className="tarea"><p>no hay tareas</p></li>)                    
                    : tareasProyecto.map(tarea=>(
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button 
                type="button"
                className="btn btn-elimnar"
            >Eliminar Proyecto &times;</button>

        </Fragment>
     );
}
 
export default ListadoTareas;