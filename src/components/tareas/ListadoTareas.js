import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyecto/proyectoContext';

const ListadoTareas = () => {

    // Obtener el state del Proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Si no hay proyecto seleccionado
    if(!proyecto){
        return <h2>Seleccionar un proyecto</h2>;
    }

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Identidad del sitio', estado: false },
        { nombre: 'Elegir Hosting', estado: true },
    ]

    

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

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