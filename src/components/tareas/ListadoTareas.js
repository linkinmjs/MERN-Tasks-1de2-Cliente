import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    // Obtener el state del Proyectos
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // Obtener el state de Tareas
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay proyecto seleccionado
    if(!proyecto){
        return <h2>Seleccionar un proyecto</h2>;
    }

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    
    
    // Eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    } 

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                { tareasproyecto.length === 0
                    ? (<li className="tarea"><p>no hay tareas</p></li>)                    
                    : tareasproyecto.map(tarea=>(
                        <Tarea
                            key={tarea.id}
                            tarea={tarea}
                        />
                    ))
                }
            </ul>

            <button 
                type="button"
                className="btn btn-elimnar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>

        </Fragment>
     );
}
 
export default ListadoTareas;